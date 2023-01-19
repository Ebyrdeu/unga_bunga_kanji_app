import {useSession} from "next-auth/react";
import {trpc} from "@/src/utils";

const useUser = () => {
	const {data: session} = useSession();

	if (!session) return

	const {data: user, isLoading} = trpc.user.useQuery({id: session?.user.id});



	return {
		curentlevel: user?.curentlevel,
		email: user?.email,
		image: user?.image,
		name: user?.name,
		role: user?.role,
		id: user?.id,
		isLoading: isLoading
	};
};

export default useUser;