import {createStyles, type CSSObject} from "@mantine/core";

export const useKanaActionTabStyles = createStyles((theme): Record<"paper" | "title", CSSObject> => ({
  paper: {backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[1]},
  title: {color: theme.colors.gray[0]},
}));
