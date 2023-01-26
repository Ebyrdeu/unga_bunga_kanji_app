import {createStyles, type CSSObject} from "@mantine/core";

export const useUserButtonStyles = createStyles((theme): Record<"user", CSSObject> => ({
	user: {
		display: "block",
		width: "100%",
		padding: theme.spacing.md,
		color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

		"&:hover": {
			backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
		},
	},
}));