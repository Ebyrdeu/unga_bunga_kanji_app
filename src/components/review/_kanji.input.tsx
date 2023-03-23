import {KanaInputActionIcon} from '@components/kana/_kanaInput.actionIcon';
import {SRS} from '@components/utils/SRS';
import {useLevelUp} from '@hooks/useLevelup';
import {TextInput, useMantineTheme} from '@mantine/core';
import {useKanjiGameStore} from '@store/store';
import {IconChevronRight} from '@tabler/icons';
import {type  UserKanji} from '@type/kanji';
import {api} from '@utils/api';

export const KanjiInput = ({kanjiData}: { kanjiData: UserKanji }) => {
  const theme = useMantineTheme();
  const {levelUpUser} = useLevelUp()
  const utils = api.useContext();
  const {disabled, correct, toggles, reading, gameActions} = useKanjiGameStore();

  // api mutations
  const {mutate: newTime} = api.srs.updateSRS.useMutation({
    onSuccess: () => utils.user.getUserKanji.invalidate(),
  });



  // Form functions
  const onCorrectAnswer = (reading: string) => {
    if (kanjiData[0]) {
      if (reading === kanjiData[0].kanji.on_readings[0]) {
        if (correct !== theme.colors.green[9]) return toggles.isCorrect(theme.colors.green[9]);
        toggles.isCorrect(null);
        toggles.toggleDisabled(false);

        const data = SRS(kanjiData[0], kanjiData[0].srs_stage);

        newTime({
          data: {
            id: kanjiData[0].kanjiId, srs_stage: data.srs_stage + 1, updatedAt: data.updatedAt,
          },
        });
        gameActions.reset();
      }
    }
  };

  const onWrongAnswer = (reading: string) => {
    if (kanjiData[0]) {
      if (reading !== kanjiData[0]?.kanji.on_readings[0]) {
        if (correct !== theme.colors.red[9]) return toggles.isCorrect(theme.colors.red[9]);
        toggles.isCorrect(null);
        toggles.toggleDisabled(false);

        const data = SRS(kanjiData[0], kanjiData[0].srs_stage < 1 ? 0 : kanjiData[0].srs_stage - 1);

        newTime({
          data: {
            id: kanjiData[0].kanjiId, srs_stage: data.srs_stage, updatedAt: data.updatedAt,
          },
        });

        gameActions.reset();
      }
    }
  };

  const onSubmit = (reading: string) => {
    levelUpUser();
    toggles.toggleDisabled(true);
    onCorrectAnswer(reading);
    onWrongAnswer(reading);
  };

  return (<form onSubmit={(e) => {
    e.preventDefault();
    return onSubmit(reading);
  }}>
    <TextInput
        sx={{
          '& > div > input': {
            textAlign: 'center', fontWeight: 700,

            '&:read-only': {
              color: theme.colors.gray[0], background: !correct ? '' : correct,
            },
          },
        }}
        autoComplete={'off'}
        readOnly={disabled}
        variant="filled"
        mt={-2}
        radius={0}
        size={'xl'}
        placeholder="答え"
        aria-label="答え"
        value={reading}
        onChange={({target}) => gameActions.set(target.value)}
        rightSection={<KanaInputActionIcon icon={IconChevronRight}/>}
    />
  </form>);
};