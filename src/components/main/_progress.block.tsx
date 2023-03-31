import {Group, Paper, Text, useMantineTheme} from '@mantine/core';
import {type UserKanji} from '@type/kanji';

export const ProgressBlock = ({kanji}: { kanji: UserKanji }) => {
  const theme = useMantineTheme();
  const apprentice = kanji.filter(k => k.srs_stage >= 1 && k.srs_stage <= 3).length;
  const guru = kanji.filter(k => k.srs_stage >= 4 && k.srs_stage <= 5).length;
  const master = kanji.filter(k => k.srs_stage === 6).length;
  const enlightened = kanji.filter(k => k.srs_stage === 7).length;
  const burned = kanji.filter(k => k.srs_stage === 8).length;

  return (
      <Group position={'center'} mt={'xl'} grow sx={{cursor: 'default'}}>
        <Paper miw={160} sx={{background: theme.colors.pink[6]}} shadow="xs" p="md">
          <Text color={theme.colors.gray[0]} size={24} align={'center'} weight={700}>{apprentice}</Text>
          <Text color={theme.colors.gray[5]} align={'center'}>Apprentice</Text>
        </Paper>
        <Paper miw={160} sx={{background: theme.colors.violet[6]}} shadow="xs" p="md">
          <Text color={theme.colors.gray[0]} size={24} align={'center'} weight={700}>{guru}</Text>
          <Text color={theme.colors.gray[5]} align={'center'}>Guru</Text>
        </Paper>
        <Paper miw={160} sx={{background: theme.colors.blue[9]}} shadow="xs" p="md">
          <Text color={theme.colors.gray[0]} size={24} align={'center'} weight={700}>{master}</Text>
          <Text color={theme.colors.gray[5]} align={'center'}>Master</Text>
        </Paper>
        <Paper miw={160} sx={{background: theme.colors.blue[6]}} shadow="xs" p="md">
          <Text color={theme.colors.gray[0]} size={24} align={'center'} weight={700}>{enlightened}</Text>
          <Text color={theme.colors.gray[5]} align={'center'}>Enlightened</Text>
        </Paper>
        <Paper miw={160} sx={{background: theme.colors.dark[6]}} shadow="xs" p="md">
          <Text color={theme.colors.gray[0]} size={24} align={'center'} weight={700}>{burned}</Text>
          <Text color={theme.colors.gray[5]} align={'center'}>Burned</Text>
        </Paper>
      </Group>
  );
};

