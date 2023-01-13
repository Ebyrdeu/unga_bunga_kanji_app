import type {GetSessionParams} from "next-auth/react";
import {getSession} from "next-auth/react";
import Authentication from "@/src/pages/Authentication";

export default function Home() {
	return (
			<>
				<Authentication/>
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

	return {
		props: {session},
	};
}