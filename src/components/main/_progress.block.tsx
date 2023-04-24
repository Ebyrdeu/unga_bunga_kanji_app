import {Group, Paper, rem, Text, useMantineTheme} from '@mantine/core';
import {type UserKanji} from '@type/kanji';
import {type FC} from 'react';

export const ProgressBlock: FC<{ kanji: UserKanji }> = ({kanji}) => {

  const {colors: {gray, pink, violet, blue, dark}} = useMantineTheme();

  const apprentice = kanji.filter(k => k.srs_stage >= 1 && k.srs_stage <= 3).length;
  const guru = kanji.filter(k => k.srs_stage >= 4 && k.srs_stage <= 5).length;
  const master = kanji.filter(k => k.srs_stage === 6).length;
  const enlightened = kanji.filter(k => k.srs_stage === 7).length;
  const burned = kanji.filter(k => k.srs_stage === 8).length;

  return (
      <div style={{marginTop: 'auto'}}>
        <Group position={'center'} mt={'xl'} grow sx={{cursor: 'default'}}>
          <Paper miw={160} sx={{background: pink[6]}} shadow="xs" p="md">
            <Text color={gray[0]} size={rem(24)} align={'center'} weight={700}>{apprentice}</Text>
            <Text color={gray[0]} align={'center'}>Apprentice</Text>
          </Paper>
          <Paper miw={160} sx={{background: violet[6]}} shadow="xs" p="md">
            <Text color={gray[0]} size={rem(24)} align={'center'} weight={700}>{guru}</Text>
            <Text color={gray[0]} align={'center'}>Guru</Text>
          </Paper>
          <Paper miw={160} sx={{background: blue[9]}} shadow="xs" p="md">
            <Text color={gray[0]} size={rem(24)} align={'center'} weight={700}>{master}</Text>
            <Text color={gray[0]} align={'center'}>Master</Text>
          </Paper>
          <Paper miw={160} sx={{background: blue[6]}} shadow="xs" p="md">
            <Text color={gray[0]} size={rem(24)} align={'center'} weight={700}>{enlightened}</Text>
            <Text color={gray[0]} align={'center'}>Enlightened</Text>
          </Paper>
          <Paper miw={160} sx={{background: dark[6]}} shadow="xs" p="md">
            <Text color={gray[0]} size={rem(24)} align={'center'} weight={700}>{burned}</Text>
            <Text color={gray[0]} align={'center'}>Burned</Text>
          </Paper>
        </Group>
      </div>
  );
};

