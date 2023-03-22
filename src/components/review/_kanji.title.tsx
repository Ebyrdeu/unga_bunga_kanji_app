import {Title} from '@mantine/core';
import {type UserKanji} from '@type/kanji';

export const KanjiTitle = ({kanjiData}: { kanjiData: UserKanji }) => {
  return (
      <Title
          aria-label={kanjiData[0]?.kanji.kanji}
          order={1}
          variant="gradient"
          gradient={{from: 'blue', to: 'cyan', deg: 45}}
          fz={190}
          fw={700}
          align={'center'}
      >
        {kanjiData[0]?.kanji.kanji}
      </Title>
  );
};

