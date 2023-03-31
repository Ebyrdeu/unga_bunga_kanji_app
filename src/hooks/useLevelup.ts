import {useUser} from '@hooks/useUser';
import {api} from '@utils/api';

export const useLevelUp = () => {
  const {kanji, user} = useUser();
  const utils = api.useContext();

  const {mutate: levelUp} = api.user.levelUpUser.useMutation({
    onSuccess: () => {
      void utils.user.getUserKanji.invalidate();
      void utils.user.getById.invalidate();
    },
  });

  return {
    levelUpUser: () => (kanji?.filter(
        k => k.srs_stage > 4 && k.updatedAt >= new Date() && k.kanji.level === user?.userLevel).length === 4)
        ? levelUp()
        : null,
  };

};