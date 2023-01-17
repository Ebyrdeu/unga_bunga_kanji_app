import {Accordion, Box, createStyles, Group, Image, List, ThemeIcon, Title} from "@mantine/core";
import {LEVEL_COLORS} from "@/@constants/_Admin.Table";
import {IconCircleDashed} from "@tabler/icons";

const useStyles = createStyles((theme) => ({
	wrapper: {
		height: `100%`,
		justifyContent: "center",
		[theme.fn.smallerThan("lg")]: {
			flexDirection: "column",
		},
	},
	title: {
		marginBottom: theme.spacing.md,
		paddingLeft: theme.spacing.md,
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
	},

	item: {
		fontSize: theme.fontSizes.sm,
		color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7],
	},
}));

const Faq = () => {
	const {classes} = useStyles();
	return (
			<Group noWrap align={"center"} className={classes.wrapper}>
				<Image sx={{flex: 5}} src={"/faq.svg"} alt="Frequently Asked Questions"/>
				<Box sx={{flex: 4}}>
					<Title order={2} align="left" className={classes.title}>Frequently Asked Questions</Title>

					<Accordion chevronPosition="right" defaultValue="faq" variant="separated">
						<Accordion.Item className={classes.item} value="faq">
							<Accordion.Control>What Does Colors in Kanji List Mean ?</Accordion.Control>
							<Accordion.Panel>
								Its refer to level that kanji have
								<List mt={"xl"}>
									<List.Item icon={
										<ThemeIcon color={LEVEL_COLORS["level_1"]} size={24} radius="xl">
											<IconCircleDashed size={16}/>
										</ThemeIcon>
									}>level 1</List.Item>
									<List.Item icon={
										<ThemeIcon color={LEVEL_COLORS["level_2"]} size={24} radius="xl">
											<IconCircleDashed size={16}/>
										</ThemeIcon>
									}>level 2</List.Item>
									<List.Item icon={
										<ThemeIcon color={LEVEL_COLORS["level_3"]} size={24} radius="xl">
											<IconCircleDashed size={16}/>
										</ThemeIcon>
									}>level 3</List.Item>
									<List.Item icon={
										<ThemeIcon color={LEVEL_COLORS["level_4"]} size={24} radius="xl">
											<IconCircleDashed size={16}/>
										</ThemeIcon>
									}>level 4</List.Item>
									<List.Item icon={
										<ThemeIcon color={LEVEL_COLORS["level_5"]} size={24} radius="xl">
											<IconCircleDashed size={16}/>
										</ThemeIcon>
									}>level 5</List.Item>
								</List>

							</Accordion.Panel>
						</Accordion.Item>

					</Accordion>
				</Box>
			</Group>
	);
};

export default Faq;