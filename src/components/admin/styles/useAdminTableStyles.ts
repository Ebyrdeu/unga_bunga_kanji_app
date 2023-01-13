import {createStyles, CSSObject} from "@mantine/core";

const useAdminTableStyles = createStyles((theme): Record<string, CSSObject> => ({
	th: {
		padding: "0 !important",
	},

	control: {
		width: "100%",
		padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,

		"&:hover": {
			backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
		},
	},

	icon: {
		width: 21,
		height: 21,
		borderRadius: 21,
	},
}));

export default useAdminTableStyles;