import {useSession} from "next-auth/react";
import {trpc} from "@/src/utils";

const useUser = () => {
	const {data: session} = useSession();
	// @ts-ignore
	const {data: user} = trpc.user.useQuery({id: session?.user.id});

	return {
		curentlevel: user?.curentlevel,
		email: user?.email,
		image: user?.image,
		name: user?.name,
		role: user?.role
	};
};

export default useUser;