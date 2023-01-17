import {createStyles} from "@mantine/core";

const useKanjiCardStyles = createStyles((theme) => ({
	card: {
		backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
	},

	label: {
		fontWeight: 700,
		lineHeight: 1,
	},

	kanji: {
		fontSize: theme.fontSizes.xl + 40,
	},

	lead: {
		fontWeight: 700,
		fontSize: 22,
		lineHeight: 1,
	},

	inner: {
		[theme.fn.smallerThan("md")]: {
			flexDirection: "column",
		},
	},

	ring: {
		flex: 1,
		display: "flex",
		justifyContent: "flex-end",

		[theme.fn.smallerThan("md")]: {
			justifyContent: "center",
			marginTop: theme.spacing.md,
		},
	},
}));

export default useKanjiCardStyles