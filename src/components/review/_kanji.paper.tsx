import {useKanaPaperStyles} from '@components/kana/styles/kanaPaper.styles';
import {Paper, Title} from '@mantine/core';

export const KanjiPaper = () => {
  const {classes} = useKanaPaperStyles(undefined, undefined);
  return (
      <Paper className={classes.paper} p="md">
        <Title className={classes.title} align={'center'} order={2} fz={32}>音読み</Title>
      </Paper>
  );
};
