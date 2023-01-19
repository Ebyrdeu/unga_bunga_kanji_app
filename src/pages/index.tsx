import type {GetSessionParams} from "next-auth/react";
import {getSession} from "next-auth/react";
import {AddKanjiListToSingleUser, trpc} from "@/src/utils";
import {Button, Group} from "@mantine/core";
import useUser from "@/hooks/useUser";
import {IconSchool, IconVocabulary} from "@tabler/icons";
import LoadingOverlayCustom from "@/components/overlay/LoadingOverlay.Custom";
import {useRouter} from "next/router";
import NextLevelStatus from "@/components/review/NextLevelStatus";

export default function Home() {
	const {data} = trpc.userKanji_all.useQuery();
	const {push} = useRouter();
	const user = useUser();

	if (!user) return null;

	const lessons = data?.filter(({lesson_status, kanji_level, kanjiId, kanji}) =>
			kanjiId === `${kanji}_${user.id}`
			&& lesson_status
			&& kanji_level === user?.curentlevel,
	);

	const reviews = data?.filter(({lesson_status, kanji_level, kanjiId, kanji, correct_answers}) =>
			kanjiId === `${kanji}_${user.id}`
			&& !lesson_status
			&& kanji_level <= user?.curentlevel!
			&& correct_answers < 5,
	);

	return (
			<LoadingOverlayCustom visible={user.isLoading}>
				<Group position={"center"}>
					<Button onClick={() => push("/lesson")} disabled={lessons?.length === 0}
					        leftIcon={<IconSchool/>}>Lessons {lessons?.length}</Button>
					<Button onClick={() => push("/review")} disabled={reviews?.length === 0}
					        leftIcon={<IconVocabulary/>}>Reviews {reviews?.length}</Button>
					<NextLevelStatus/>

				</Group>
			</LoadingOverlayCustom>
	);
}

/**
 * So this is basically to Protect user to try to use app if he is not logged in to my app.
 * In Terms why do I restrict users > need to do less work.
 * @see https://next-auth.js.org/configuration/nextjs#in-getserversideprops
 * */
export async function getServerSideProps(context: GetSessionParams) {
	const session = await getSession(context);
	if (!session) {
		return {
			redirect: {
				destination: "/auth",
				permanent: false,
			},
		};
	}

	if (session)  await AddKanjiListToSingleUser(session);

	return {
		props: {session},
	};
}