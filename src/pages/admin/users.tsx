import {trpc} from "@/utils/_trpc";
import AdminTableUser from "@/components/admin/_admin.table.user";
import type {NextPage} from "next";
import type {GetSessionParams} from "next-auth/react";
import {getSession} from "next-auth/react";

const Users: NextPage = () => {
	const {data} = trpc.users.useQuery();

	if (!data) return null;

	return <AdminTableUser data={data}/>;
};

export default Users;

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