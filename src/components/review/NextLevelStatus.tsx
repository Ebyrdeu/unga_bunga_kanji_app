import {Button, Group} from "@mantine/core";
import useUser from "@/hooks/useUser";
import {trpc} from "@/src/utils";
import {useRouter} from "next/router";
import {PropsWithChildren} from "react";

const NextLevelStatus = ({children}: PropsWithChildren) => {
	const {data} = trpc.userKanji_all.useQuery();
	const {mutate: userLevelUP} = trpc.user_level_up.useMutation();
	const user = useUser();
	const {push} = useRouter();

	const nextLevelCheck = data?.filter(({lesson_status, kanji_level, kanjiId, kanji, correct_answers}) =>
			kanjiId === `${kanji}_${user?.id}`
			&& !lesson_status
			&& kanji_level === user?.curentlevel!
			&& correct_answers === 5,
	);

	if (!nextLevelCheck && !user) return null;

	console.log(nextLevelCheck);
	return (
			<Group position={"center"} align={"center"}>
				<Button disabled={nextLevelCheck?.length! < 2} onClick={async () => {
					await userLevelUP({id: user?.id!, currentLevel: user?.curentlevel! + 1});
					return push("/");
				}
				}>To next Level</Button>
				{children}
			</Group>
	);
};

export default NextLevelStatus;