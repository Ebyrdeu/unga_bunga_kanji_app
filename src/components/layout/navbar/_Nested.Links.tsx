import {useState} from "react";
import {IconChevronLeft, IconChevronRight} from "@tabler/icons";
import Link from "next/link";
import {Box, Collapse, Group, ThemeIcon, UnstyledButton} from "@mantine/core";
import useNestedLinksStyles from "./styles/_NestedLinks.Styles";
import {NestedLinksProps} from "@/@types";

const NestedLinks = ({icon: Icon, label, initiallyOpened, links}: NestedLinksProps) => {
	const {classes, theme} = useNestedLinksStyles(undefined, undefined);
	const hasLinks = Array.isArray(links);
	const [opened, setOpened] = useState(initiallyOpened || false);
	const ChevronIcon = theme.dir === "ltr" ? IconChevronRight : IconChevronLeft;

	const items = (hasLinks ? links : []).map((link) => (
			<Link
					className={classes.link}
					href={link.link}
					key={link.label}>
				{link.label}
			</Link>
	));

	return (
			<>
				<UnstyledButton onClick={() => setOpened((o: any) => !o)} className={classes.control}>
					<Group position="apart" spacing={0}>
						<Box sx={{display: "flex", alignItems: "center"}}>
							<ThemeIcon variant="light" size={30}>
								<Icon size={18}/>
							</ThemeIcon>
							<Box ml="md">{label}</Box>
						</Box>
						{hasLinks && (
								<ChevronIcon
										className={classes.chevron}
										size={14}
										stroke={1.5}
										style={{transform: opened ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)` : "none"}}
								/>
						)}
					</Group>
				</UnstyledButton>
				{hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
			</>
	);
};

export default NestedLinks;