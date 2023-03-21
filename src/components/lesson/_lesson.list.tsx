import {NoLesson} from '@components/lesson/_noLesson';
import {SRS} from '@components/utils/SRS';
import {Paper, Text, Title, useMantineTheme} from '@mantine/core';
import type {Kanji, KanjiOnUsers} from '@prisma/client';
import {api} from '@utils/api';

export const LessonList = ({data: kanjiData}: { data: (KanjiOnUsers & { kanji: Kanji })[] }) => {
  const theme = useMantineTheme();
  const utils = api.useContext();
  const {mutate} = api.srs.updateSRS.useMutation({
    onSuccess: () => utils.user.getUserKanji.invalidate(),
  });

  const onSubmit = (item: KanjiOnUsers) => {
    const data = SRS(item, item.srs_stage);

    if (!data) return;

    return mutate({data: {id: item.kanjiId, srs_stage: data.srs_stage + 1, updatedAt: data.updatedAt}});
  };

  if (kanjiData.length === 0) return <NoLesson/>;

  const mappedData = kanjiData?.map((item) => (
      <div key={item.kanjiId}>
        <Title
            aria-label={item.kanji.kanji}
            order={2}
            variant="gradient"
            gradient={{from: 'blue', to: 'cyan', deg: 45}}
            fz={190}
            fw={700}
            align={'center'}
        >

          {item.kanji.kanji}

        </Title>
        <Paper sx={{background: theme.colors.blue[7]}} p={'md'}>
          <Text fw={700} color={theme.colors.gray[0]} align={'center'} fz={30}>{item.kanji.meanings[0]}</Text>
        </Paper>
        <button onClick={() => void onSubmit(item)}>Submit</button>
      </div>
  ));

  return (
      <div>
        {mappedData[0]}
      </div>
  );
};
