import {createStyles, type CSSObject} from "@mantine/core";

export const useKanaPaperStyles = createStyles((theme): Record<"paper" | 'title', CSSObject> => ({
	paper: {backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.dark[5]},
	title: {color: theme.colors.gray[0]},
}));
