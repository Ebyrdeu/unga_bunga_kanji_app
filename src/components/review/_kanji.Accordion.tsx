import {Accordion, Group, Text} from '@mantine/core';
import {useKanjiGameStore} from '@store/store';
import {type UserKanji} from '@type/kanji';
import {type FC} from 'react';

export const KanjiAccordion: FC<{ kanjiData: UserKanji }> = ({kanjiData}) => {
  const {disabled} = useKanjiGameStore();

  return (
      <Accordion sx={{visibility: !disabled ? 'hidden' : 'visible'}} defaultValue={'readings'} mt={'md'} radius={0} variant={'contained'}>
        <Accordion.Item value="meanings">
          <Accordion.Control>Meanings</Accordion.Control>
          <Accordion.Panel>
            <Text>Primary: {kanjiData[0]?.kanji.meanings[0]}</Text>
            <Text sx={{display: kanjiData[0]?.kanji.meanings.slice(1).length === 0 ? 'none' : 'block'}}>
              Alternative: {kanjiData[0]?.kanji.meanings.slice(1).join(', ')}
            </Text>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="readings">
          <Accordion.Control>Readings</Accordion.Control>
          <Accordion.Panel>
            <Group>
              <div>
                <Text align="center">On’yomi</Text>
                <div style={{display: 'flex'}}>
                  <Text size="sm" fw={'bold'}>
                    {kanjiData[0]?.kanji.on_readings[0]}
                  </Text>
                  <Text color="dimmed" size="sm">
                    {kanjiData[0]?.kanji.on_readings.slice(1).join(', ')}
                  </Text>
                </div>
              </div>

              <div>
                <Text align="center">Kun’yomi</Text>
                <Text color="dimmed" size="sm">
                  {kanjiData[0]?.kanji.kun_readings.length === 1 ? 'None' : kanjiData[0]?.kanji.kun_readings.join(', ')}
                </Text>
              </div>
            </Group>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
  );
};

