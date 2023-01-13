import {trpc} from "@/src/utils";
import {getSession, GetSessionParams} from "next-auth/react";
import AdminTableKanji from "@/components/admin/_admin.table.kanji";

const Kanji = () => {
	const {data} = trpc.kanji_all.useQuery();

	if (!data) return null;

	return <AdminTableKanji data={data}/>;
};

export default Kanji;

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

	// @ts-ignore
	if (session?.user?.role !== "admin") {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}
	return {
		props: {session},
	};
}