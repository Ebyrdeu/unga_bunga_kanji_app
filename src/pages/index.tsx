import type {GetSessionParams} from "next-auth/react";
import {getSession} from "next-auth/react";
import {AddKanjiListToSingleUser, trpc} from "@/src/utils";
import {Button, Group} from "@mantine/core";
import useUser from "@/hooks/useUser";
import {IconSchool, IconVocabulary} from "@tabler/icons";
import Link from "next/link";

export default function Home() {
	const {data} = trpc.userKanji_all.useQuery();
	const {curentlevel} = useUser();
	if (!data) return;

	const lessons = data?.filter(({lesson_status, kanji_level}) => lesson_status && kanji_level === curentlevel);
	const reviews = data?.filter(({lesson_status, kanji_level}) => !lesson_status && kanji_level <= curentlevel!);

	return (
			<>
				<Group position={"center"}>
					<Link href={"/lesson"}><Button leftIcon={<IconSchool/>}>Lessons {lessons.length}</Button></Link>
					<Link href={"/review"}><Button leftIcon={<IconVocabulary/>}>Reviews {reviews.length}</Button></Link>
				</Group>
			</>
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

	await AddKanjiListToSingleUser(session);

	return {
		props: {session},
	};
}