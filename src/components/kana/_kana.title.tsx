import {rem, Title} from '@mantine/core';
import {useKanaGameStore} from '@store/store';
import {type KanaData} from '@type/kana';
import {type FC} from 'react';

export const KanaTitle: FC<{ kanaData: KanaData[] }> = ({kanaData}) => {
  const {index} = useKanaGameStore();
  return (
      <Title
          aria-label={kanaData[index]?.kana}
          order={1}
          variant="gradient"
          gradient={{from: 'blue', to: 'cyan', deg: 45}}
          fz={rem(190)}
          fw={700}
          align={'center'}
      >
        {kanaData[index]?.kana}
      </Title>
  );
};

