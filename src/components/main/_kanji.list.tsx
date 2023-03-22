import {STAGE_COLORS} from '@constant/colors';
import {ActionIcon, Box, Group, Progress, Text, Tooltip} from '@mantine/core';
import type {Kanji, KanjiOnUsers} from '@prisma/client';
import {useRouter} from 'next/router';

type KanjiListProps = { kanji: (KanjiOnUsers & { kanji: Kanji; })[] }

export const KanjiList = ({kanji}: KanjiListProps) => {
  const {push} = useRouter();

  const mappedKanji = kanji?.map((item) => {
    return (
        <div key={item.kanjiId} style={{width: 44}}>
          <Tooltip withArrow label={item.srs_stage === 0
              ? 'Locked'
              : `Next: ${item.updatedAt.toLocaleString()}`}>
            <ActionIcon onClick={() => void push(`/kanji/${item.kanji.kanji}`)} mb={5}
                        color={STAGE_COLORS[`stage_${item.srs_stage}`]} size={44} variant="light">
              {item.kanji.kanji}
            </ActionIcon>
          </Tooltip>
          <Progress size={'sm'} striped animate color={STAGE_COLORS[`stage_${item.srs_stage}`]}
                    value={item.srs_stage * 20}/>
        </div>
    );
  });

  return (
      <Box mt={'xl'} px={'xl'}>
        <Text align={'center'} fz="xs" tt="uppercase" fw={700} c="dimmed">
          Current Level Kanji
        </Text>
        <Group sx={{alignItems: 'center', justifyContent: 'center'}} mt={'md'} position={'center'}>
          {mappedKanji}
        </Group>
      </Box>
  );
};

