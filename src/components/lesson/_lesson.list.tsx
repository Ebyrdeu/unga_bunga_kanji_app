import {NoLesson} from '@components/lesson/_noLesson';
import {SRS} from '@components/utils';
import {Button, Group, Paper, rem, Text, Title, useMantineTheme} from '@mantine/core';
import type {KanjiOnUsers} from '@prisma/client';
import {IconChevronRight} from '@tabler/icons-react';
import {type UserKanji} from '@type/kanji';
import {api} from '@utils/api';
import {type FC} from 'react';

export const LessonList: FC<{ data: UserKanji }> = ({data: kanjiData}) => {
  const {colors: {blue, gray}} = useMantineTheme();
  const ctx = api.useContext();

  const {mutate} = api.srs.updateSRS.useMutation({
    onSuccess() {
      void ctx.user.getUserKanji.invalidate();
    },
  });

  const onSubmit = (item: KanjiOnUsers) => {
    const data = SRS(item, item.srs_stage);

    if (!data) return;

    return mutate({data: {id: item.kanjiId, srs_stage: data.srs_stage + 1, updatedAt: data.updatedAt}});
  };

  if (kanjiData.length === 0) return <NoLesson text={'lessons'}/>;

  const mappedData = kanjiData?.map((item) => (
      <div key={item.kanjiId}>
        <Group position={'right'}>
          <Button
              rightIcon={<IconChevronRight/>}
              uppercase
              onClick={() => onSubmit(item)}
              variant="gradient"
              gradient={{from: 'blue', to: 'cyan', deg: 45}}
              radius="xl"
              size="xs">
            Next Lesson
          </Button>
        </Group>
        <Title
            aria-label={item.kanji.kanji}
            order={2}
            variant="gradient"
            gradient={{from: 'blue', to: 'cyan', deg: 45}}
            fz={rem(190)}
            fw={700}
            align={'center'}
        >
          {item.kanji.kanji}
        </Title>
        <Text mb={'xl'} fw={700} variant="gradient"
              gradient={{from: 'blue', to: 'cyan', deg: 45}} align={'center'}
              fz={rem(30)}>{item.kanji.meanings[0]}</Text>
        <Paper sx={{background: blue[7]}} p={'md'}>
          <Text align={'center'} fw={700} color={gray[0]}
                fz={rem(30)}>{item.kanji.on_readings[0]}</Text>
        </Paper>

      </div>
  ));

  return (
      <div>
        {mappedData[0]}
      </div>
  );
};
