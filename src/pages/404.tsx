import {createStyles, Group, Image, Text, Title} from "@mantine/core";

const useStyles = createStyles((theme) => ({
	root: {
		height: `100%`,
		justifyContent: "center",
		[theme.fn.smallerThan("lg")]: {
			flexDirection: "column",
		},
	},

	title: {
		fontWeight: 900,
		fontSize: 34,
		marginBottom: theme.spacing.md,

		[theme.fn.smallerThan("md")]: {
			fontSize: 32,
		},
	},

}));

const Page_404 = () => {

	const {classes} = useStyles();

	return (

			<Group noWrap position={"center"} align={"center"} className={classes.root}>
				<Image src={"/404.svg"} alt={'404 error image'}/>
				<div>
					<Title className={classes.title}>Something is not right...</Title>
					<Text color="dimmed" size="lg">
						Page you are trying to open does not exist. You may have mistyped the address, or the
						page has been moved to another URL. If you think this is an error contact support.
					</Text>
				</div>
			</Group>
	);
};

export default Page_404;