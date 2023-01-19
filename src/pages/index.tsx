import type {GetSessionParams} from "next-auth/react";
import {getSession} from "next-auth/react";
import LoadingOverlayCustom from "@/components/overlay/LoadingOverlay.Custom";
import useUser from "@/hooks/useUser";


export default function Home() {
const user = useUser();



	return (
			<LoadingOverlayCustom visible={user?.isLoading}>
			test
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
		return {
			props: {session},
		};

}