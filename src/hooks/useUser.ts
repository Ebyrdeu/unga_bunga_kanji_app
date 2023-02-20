import {useSession} from "next-auth/react";
import {api} from "@utils/api";

export const useUser = () => {
  const {data: sessionData} = useSession();

  const {data: user} = api.user.get.useQuery(undefined, {enabled: sessionData?.user !== undefined});


  return user;
};