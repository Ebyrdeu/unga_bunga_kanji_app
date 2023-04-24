import {useUser} from '@/hooks/useUser';
import {api} from '@utils/api';

/**
 * @param threshold The number of kanji that must be completed before the user can level up.
 * @returns An object with a single function, levelUpUser, that can be called to check if the user is ready to level up.
 */
export const useLevelUp = (threshold: number) => {
  const {kanji, user} = useUser();

  const ctx = api.useContext();

  const {mutate: levelUp} = api.user.levelUpUser.useMutation({
    onSuccess: () => {
      void ctx.user.getUserKanji.invalidate();
      void ctx.user.getById.invalidate();
    },
  });

  return {
    levelUpUser: () => (kanji?.filter(
        k => k.srs_stage > 4 && k.updatedAt >= new Date() && k.kanji.level === user?.userLevel).length === threshold)
        ? levelUp()
        : null,
  };

};