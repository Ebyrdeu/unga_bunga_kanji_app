import {KanaInputActionIcon} from '@components/kana/_kanaInput.actionIcon';
import {shuffleKana} from '@components/utils/shuffle';
import {TextInput, useMantineTheme} from '@mantine/core';

import {useForm} from '@mantine/form';
import {useKanaGameStore} from '@store/store';
import {IconChevronRight} from '@tabler/icons-react';

import {type KanaData} from '@type/kana';
import {type FC} from 'react';

export const KanaInput: FC<{ kanaData: KanaData[] }> = ({kanaData}) => {
  const {colors: {gray, green, red}} = useMantineTheme();
  const {disabled, correct, index, handlers, toggles} = useKanaGameStore();
  const form = useForm({initialValues: {reading: ''}});
  const onCorrectAnswer = (reading: string) => {
    if (kanaData[index]?.reading.includes(reading)) {
      if (correct !== green[9]) return toggles.isCorrect(green[9]);
      toggles.isCorrect(null);
      toggles.toggleDisabled(false);
      form.reset();
      handlers.increment();
    }
  };

  const onWrongAnswer = (reading: string) => {
    if (!kanaData[index]?.reading.includes(reading)) {
      if (correct !== red[9]) return toggles.isCorrect(red[9]);
      toggles.isCorrect(null);
      shuffleKana(kanaData);
      toggles.toggleDisabled(false);
      form.reset();

    }
  };

  const onSubmit = (reading: string) => {
    toggles.toggleDisabled(true);
    onCorrectAnswer(reading);
    onWrongAnswer(reading);
  };

  return (
      <form onSubmit={form.onSubmit(({reading}) => onSubmit(reading))}>
        <TextInput
            sx={{
              '& > div > input': {
                textAlign: 'center',
                fontWeight: 700,

                '&:read-only': {
                  color: gray[0],
                  background: !correct ? '' : correct,
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
            rightSection={<KanaInputActionIcon icon={IconChevronRight}/>}
            {...form.getInputProps('reading')}
        />
      </form>
  );
};

