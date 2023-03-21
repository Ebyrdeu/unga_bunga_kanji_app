import {Title} from '@mantine/core';

import {useKanaGameStore} from '@store/store';
import {type KanaData} from '@type/kana';

import {type NextPage} from 'next';

export const KanaTitle: NextPage<{ kanaData: KanaData[] }> = ({kanaData}) => {
  const {index} = useKanaGameStore();
  return (
      <Title
          aria-label={kanaData[index]?.kana}
          order={1}
          variant="gradient"
          gradient={{from: 'blue', to: 'cyan', deg: 45}}
          fz={190}
          fw={700}
          align={'center'}
      >
        {kanaData[index]?.kana}
      </Title>
  );
};

