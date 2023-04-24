import {CustomLoader} from '@components/loader';
import {STAGE_COLORS} from '@constant/colors';
import {ActionIcon, Box, Group, rem, Text} from '@mantine/core';
import {api} from '@utils/api';
import {type NextPage} from 'next';
import {useRouter} from 'next/router';

const KanjiList: NextPage = () => {
  const {data: kanji, isLoading} = api.kanji.getAll.useQuery();

  const {push} = useRouter();

  if (!kanji || isLoading) return <CustomLoader/>;

  const mappedKanji = kanji.sort((a, b) => a.level - b.level).map((k) => (
      <ActionIcon key={k.id} size={100} mb={5} onClick={() => void push(`/kanji/${k.kanji}`)} color={STAGE_COLORS[`stage_${k.level}`]} variant="light">
        <Group spacing={0} sx={{flexDirection: 'column', alignItems: 'center'}}>
          <Text size={rem(30)}>{k.kanji}</Text>
          <Text size={rem(12)}>{k.on_readings[0]}</Text>
          <Text>{k.meanings[0]}</Text>
        </Group>
      </ActionIcon>
  ));

  return (
      <Box mt={'xl'}>
        <Text align={'center'} fz="xs" tt="uppercase" fw={700} c="dimmed">
          List of Kanji
        </Text>
        <Group mt={'xl'} position={'center'}>
          {mappedKanji}
        </Group>
      </Box>
  );
};

export default KanjiList;

