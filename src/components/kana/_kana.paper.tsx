import {Paper, Title} from "@mantine/core";
import {useKanaPaperStyles} from "@components/kana/styles/kanaPaper.styles";

export const KanaPaper = () => {
  const {classes} = useKanaPaperStyles(undefined, undefined);
  return (
      <Paper className={classes.paper} p="md">
        <Title className={classes.title} align={"center"} order={2} fz={32}>読み</Title>
      </Paper>
  );
};
