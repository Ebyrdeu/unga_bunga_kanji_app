import {api} from '@utils/api';
import {useSession} from 'next-auth/react';

/**
 @description Retrieves the user and their kanji data from the API based on the user session.
 @returns An object containing the user and kanji data, and their loading status.
 @example
 const { user, kanji, userLoading, kanjiLoading } = useUser();
 console.log(user, kanji, userLoading, kanjiLoading); // {name: 'John', level: 3}, [{kanji: '人', meanings: ['person'], level: 1}, ...], false, true
 */
export const useUser = () => {
  const {data: sessionData} = useSession();

  const {data: user, isLoading: userLoading} = api.user.getById.useQuery(undefined, {enabled: !!sessionData?.user});
  const {data: kanji, isLoading: kanjiLoading} = api.user.getUserKanji.useQuery(undefined, {enabled: !!sessionData?.user});

  return {
    user,
    kanji,
    userLoading,
    kanjiLoading,
  };
};