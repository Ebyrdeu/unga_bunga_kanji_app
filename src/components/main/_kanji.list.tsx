import {STAGE_COLORS} from '@constant/colors';
import {ActionIcon, Box, Group, Progress, rem, Text, Tooltip} from '@mantine/core';
import type {User} from '@prisma/client';
import {type UserKanji} from '@type/kanji';
import {useRouter} from 'next/router';
import {type FC} from 'react';

export const KanjiList: FC<{ kanji: UserKanji, user: User }> = ({kanji, user}) => {
  const {push} = useRouter();

  const completed = kanji.filter(k => k.srs_stage >= 5 && k.kanji.level === user.userLevel).length;
  const total = kanji.filter(k => k.kanji.level === user.userLevel).length;

  const mappedKanji = kanji?.filter(k => k.kanji.level === user.userLevel).map((item) => {
    return (
        <div key={item.kanjiId} style={{width: rem(60)}}>
          <Tooltip withArrow label={item.srs_stage === 0
              ? 'Locked'
              : `Next: ${item.updatedAt.toLocaleString()}`}>
            <ActionIcon onClick={() => void push(`/kanji/${item.kanji.kanji}`)} mb={5}
                        color={STAGE_COLORS[`stage_${item.srs_stage}`]} size={rem(60)} variant="light">
              <Text size={rem(30)}>{item.kanji.kanji}</Text>
            </ActionIcon>
          </Tooltip>
          <Progress aria-label={'kanji progress bar'} size={'sm'} striped={item.srs_stage < 5}
                    animate={item.srs_stage < 5}
                    color={STAGE_COLORS[`stage_${item.srs_stage}`]}
                    value={item.srs_stage * 20}/>
        </div>
    );
  });

  return (
      <Box mt={'xl'} px={'xl'}>
        <Text align={'center'} fz="xs" tt="uppercase" fw={700} c="dimmed">
          Level {user.userLevel} Progress
        </Text>

        <Box sx={{margin: '0 auto', width: rem(800), maxWidth: '100%'}}>
          <Progress aria-label={` ${completed} of ${total - 3} kanji passed`}
                    label={` ${completed} of ${total - 3} kanji passed`}
                    my={'md'}
                    size="xl"
                    radius={'xl'}
                    color={STAGE_COLORS[`stage_${completed}`]}
                    value={(completed + 3) * 10}/>
        </Box>

        <Group sx={{alignItems: 'center', justifyContent: 'center'}} position={'center'}>
          {mappedKanji}
        </Group>
      </Box>
  );
};

