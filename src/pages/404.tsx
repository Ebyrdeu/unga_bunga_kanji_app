import {Button, createStyles, Group, Text, Title} from "@mantine/core";
import {Illustration} from "@components/errors/_illustration_404";
import {IconArrowBack} from "@tabler/icons";
import {useRouter} from "next/router";

const NotFound = () => {
	const {classes} = useNotFoundStyles();
	const {back} = useRouter();
	return (
			<div className={classes.root}>
				<div className={classes.inner}>
					<Illustration className={classes.image}/>
					<div className={classes.content}>
						<Title className={classes.title}>Nothing to see here</Title>
						<Text color="dimmed" size="lg" align="center" className={classes.description}>
							Page you are trying to open does not exist. You may have mistyped the address, or the
							page has been moved to another URL. If you think this is an error contact support.
						</Text>
						<Group position={"center"}>
							<Button onClick={() => back()} leftIcon={<IconArrowBack/>} size="md">Take me back to previous page</Button>
						</Group>
					</div>
				</div>
			</div>
	);
};

export default NotFound;

const useNotFoundStyles = createStyles((theme) => ({
	root: {
		paddingTop: 80,
		paddingBottom: 80,
	},

	inner: {
		position: "relative",
	},

	image: {
		position: "absolute",
		top: 0,
		right: 0,
		left: 0,
		zIndex: 0,
		opacity: 0.75,
	},

	content: {
		paddingTop: 220,
		position: "relative",
		zIndex: 1,

		[theme.fn.smallerThan("sm")]: {
			paddingTop: 120,
		},
	},

	title: {
		textAlign: "center",
		fontWeight: 900,
		fontSize: 38,

		[theme.fn.smallerThan("sm")]: {
			fontSize: 32,
		},
	},

	description: {
		maxWidth: 540,
		margin: "auto",
		marginTop: theme.spacing.xl,
		marginBottom: theme.spacing.xl * 1.5,
	},
}));