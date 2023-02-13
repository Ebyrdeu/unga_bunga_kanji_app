import {Accordion} from "@mantine/core";

import {useAccordionItemCustomStyles} from "@components/faq/styles/accordionItemCustom.styles";

import {type AccordionItemCustomProps} from "@type/faq";

export const AccordionItemCustom: AccordionItemCustomProps = ({label, placeholder, value}) => {
	const {classes} = useAccordionItemCustomStyles(undefined, undefined);
	return (
			<Accordion.Item className={classes.item} value={value}>
				<Accordion.Control>{label}</Accordion.Control>
				<Accordion.Panel>{placeholder}</Accordion.Panel>
			</Accordion.Item>

	);
};
