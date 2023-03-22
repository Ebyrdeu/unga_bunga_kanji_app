import {Progress, Text} from '@mantine/core';
import {useKanaGameStore} from '@store/store';
import {type KanaData} from '@type/kana';

import {type NextPage} from 'next';

export const KanaProgress: NextPage<{ kanaData: KanaData[] }> = ({kanaData}) => {
  const {index} = useKanaGameStore();

  return (
      <>
        <Progress aria-label="Game Progress" size="xs" value={index - 3}/>
        <Text align={'right'} color={'dimmed'}>{index} / {kanaData.length - 1} </Text>
      </>
  );
};

