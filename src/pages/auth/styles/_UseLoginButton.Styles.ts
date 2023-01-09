import {createStyles, CSSObject} from "@mantine/core";

const useUserLoginButtonStyles = createStyles((theme): Record<"discord" | "github", CSSObject> => ({
	github: {
		borderRadius: theme.radius.xl,
		backgroundColor: theme.colorScheme === "dark" ? theme.colors.gray[0] : theme.colors.dark[9],
		color: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[1],
		"&:hover": {
			backgroundColor: theme.colorScheme === "dark" ? theme.colors.gray[2] : theme.colors.dark[6],
		},
	},
	discord: {
		borderRadius: theme.radius.xl,
		backgroundColor: theme.colorScheme === "dark" ? "#5865F2" : "#5865F2",
		"&:hover": {
			backgroundColor:
					theme.colorScheme === "dark"
							? theme.fn.lighten("#5865F2", 0.05)
							: theme.fn.darken("#5865F2", 0.05),
		},
	},
}));

export default useUserLoginButtonStyles;