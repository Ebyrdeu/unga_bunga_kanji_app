import {Accordion, Text} from '@mantine/core';
import {useKanaGameStore} from '@store/store';
import {type KanaData} from '@type/kana';
import {type FC} from 'react';

export const KanaAccordion: FC<{ kanaData: KanaData[] }> = ({kanaData}) => {
  const {disabled, index} = useKanaGameStore();
  return (
      <Accordion sx={{visibility: !disabled ? 'hidden' : 'visible'}} mt={'md'} radius={0} variant="separated">
        <Accordion.Item value="item-info">
          <Accordion.Control>Item Info</Accordion.Control>
          <Accordion.Panel>
            <Text>Reading: {kanaData[index]?.reading.join(', ')}</Text>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
  );
};

