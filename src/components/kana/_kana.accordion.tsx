import {Accordion, Text} from '@mantine/core';
import {useKanaGameStore} from '@store/store';
import {type KanaData} from '@type/kana';

import {type NextPage} from 'next';

export const KanaAccordion: NextPage<{ kanaData: KanaData[] }> = ({kanaData}) => {
  const {disabled, index} = useKanaGameStore();
  return (
      <Accordion sx={{visibility: !disabled ? 'hidden' : 'visible'}} mt={'md'} radius={0} variant="separated"
                 defaultValue={'item-info'}>
        <Accordion.Item value="item-info">
          <Accordion.Control>Item Info</Accordion.Control>
          <Accordion.Panel>
            <Text>Reading: {kanaData[index]?.reading}</Text>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
  );
};
