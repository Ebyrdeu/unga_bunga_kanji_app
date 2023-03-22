import {api} from '@utils/api';
import {useSession} from 'next-auth/react';

export const useUser = () => {
  const {data: sessionData} = useSession();

  const {data: user} = api.user.getById.useQuery(undefined, {enabled: sessionData?.user !== undefined});
  const {data: kanji} = api.user.getUserKanji.useQuery(undefined, {enabled: sessionData?.user !== undefined});

  return {
    user,
    kanji,
  };
};