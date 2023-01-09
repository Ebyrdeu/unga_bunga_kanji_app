import {createStyles, CSSObject} from "@mantine/core";

const useUserButtonStyles = createStyles((theme): Record<"wrapper" | "button", CSSObject> => ({
	wrapper: {
		paddingTop: theme.spacing.sm,
		borderTop: `1px solid ${
				theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
		}`,
	},
	button: {
		display: "block",
		width: "100%",
		padding: theme.spacing.xs,
		borderRadius: theme.radius.sm,
		color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

		"&:hover": {
			backgroundColor:
					theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
		},
	},
}));

export default useUserButtonStyles;