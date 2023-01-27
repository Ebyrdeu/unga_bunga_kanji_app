import {Accordion, Container, createStyles, Title} from "@mantine/core";
import {AccordionItemCustom} from "@components/faq/_accordionItem.custom";

const useFaqStyles = createStyles((theme) => ({
	wrapper: {
		paddingTop: theme.spacing.xl * 2,
		paddingBottom: theme.spacing.xl * 2,
		minHeight: 650,
	},

	title: {
		marginBottom: theme.spacing.xl * 1.5,
	},

}));

const Faq = () => {
	const {classes} = useFaqStyles();
	return (
			<Container size="sm" className={classes.wrapper}>
				<Title align="center" className={classes.title}>
					Frequently Asked Questions
				</Title>

				<Accordion variant="separated">
					<AccordionItemCustom
							label={"Does Unga Bunga have any prerequisites?"}
							placeholder={"Sort of, you don't need to know japanese, but you do need to know basics of Hiragana and Katakana."}
							value={"prerequisites"}
					/>
					<AccordionItemCustom
							label={"How Do I Level Up?"}
							placeholder={"In order to level up, you need to get a specific number of kanji to Guru in your current level. To “pass” something means to get that item to the Guru stage."}
							value={"level-up"}
					/>
				</Accordion>
			</Container>
	);
};

export default Faq;