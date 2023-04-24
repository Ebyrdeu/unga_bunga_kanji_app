import {rem, Title} from '@mantine/core';
import {type UserKanji} from '@type/kanji';
import {type FC} from 'react';

export const KanjiTitle: FC<{ kanjiData: UserKanji }> = ({kanjiData}) => {
  return (
      <Title
          aria-label={kanjiData[0]?.kanji.kanji}
          order={1}
          variant="gradient"
          gradient={{from: 'blue', to: 'cyan', deg: 45}}
          fz={rem(190)}
          fw={700}
          align={'center'}
      >
        {kanjiData[0]?.kanji.kanji}
      </Title>
  );
};

