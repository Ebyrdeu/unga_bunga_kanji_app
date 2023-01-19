import {trpc} from "@/src/utils";
import useUser from "@/hooks/useUser";
import {toKatakana} from "wanakana";
import {Button, TextInput, Title} from "@mantine/core";
import {ChangeEvent, FormEvent, useRef, useState} from "react";
import NextLevelStatus from "@/components/review/NextLevelStatus";
import {useRouter} from "next/router";

const Review = () => {
	const {data} = trpc.userKanji_all.useQuery();
	const {mutate: mutateAnswer} = trpc.userKanji_correct_answer.useMutation();
	const user = useUser();
	const [answer, setAnswer] = useState<string>("");
	const [index, setIndex] = useState<number>(0);
	const ref = useRef<HTMLFormElement>(null);
	const {push} = useRouter();
	const reviews = data?.filter(({lesson_status, kanji_level, kanjiId, kanji, correct_answers}) =>
			kanjiId === `${kanji}_${user?.id}`
			&& !lesson_status
			&& kanji_level <= user?.curentlevel!
			&& correct_answers < 5,
	);

	const typeAnswer = (event: ChangeEvent<HTMLInputElement>) => {
		const text = event.target.value;

		const kana = toKatakana(text, {IMEMode: true});

		return setAnswer(kana);
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (reviews?.[index]?.on_readings[0] !== answer) {
			mutateAnswer({
				kanjiId: `${reviews?.[index]?.kanji}_${user?.id}`,
				correct_answers: reviews?.[index]?.correct_answers! - 1,
				total_answers: reviews?.[index]?.total_answers! + 1,
			});
			reviews?.slice(1);
			return setIndex((prev) => prev + 1);
		}
		if (reviews?.[index]?.on_readings[0] === answer) {
			mutateAnswer({
				kanjiId: `${reviews?.[index]?.kanji}_${user?.id}`,
				correct_answers: reviews?.[index]?.correct_answers + 1,
				total_answers: reviews?.[index]?.total_answers + 1,
			});
			reviews.slice(1);
			return setIndex((prev) => prev + 1);
		}
	};

	return !reviews?.[index] ? <NextLevelStatus> <Button onClick={() => push("/")}>Back To Home Menu</Button> </NextLevelStatus> : (
			<div>
				<form ref={ref} onSubmit={onSubmit}>
					<Title order={5} fz={80} align={"center"}>{reviews?.[index]?.kanji}</Title>
					<TextInput
							label={"Kanji Reading"}
							value={answer}
							onChange={typeAnswer}
							autoFocus={true}
							withAsterisk
							placeholder="Type your answer here"
					/>
				</form>
			</div>
	);
};

export default Review;

