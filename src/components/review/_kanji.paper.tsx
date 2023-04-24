import {useKanaPaperStyles} from '@components/kana/styles/kanaPaper.styles';
import {Paper, rem, Title} from '@mantine/core';
import {type FC} from 'react';

export const KanjiPaper: FC = () => {
  const {classes} = useKanaPaperStyles(undefined, undefined);
  return (
      <Paper className={classes.paper} p="md">
        <Title className={classes.title} align={'center'} order={2} fz={rem(32)}>音読み</Title>
      </Paper>
  );
};

