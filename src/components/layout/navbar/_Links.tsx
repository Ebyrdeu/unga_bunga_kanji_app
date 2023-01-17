import {Box, Group, ThemeIcon, UnstyledButton} from "@mantine/core";
import useLinksStyles from "@/components/layout/navbar/styles/_NestedLinks.Styles";
import type {LinksProps} from "@/@types";
import Link from "next/link";

const Links = ({icon: Icon, label, color, link}: LinksProps) => {
	const {classes} = useLinksStyles(undefined, undefined);
	return (
			<Link style={{textDecoration: "none"}} href={!link ? '/' : link}>
				<UnstyledButton className={classes.control}>
					<Group position="apart" spacing={0}>
						<Box sx={{display: "flex", alignItems: "center"}}>
							<ThemeIcon color={!color ? "blue" : color} variant="light" size={30}>
								<Icon size={18}/>
							</ThemeIcon>
							<Box  ml="md">{label}</Box>
						</Box>
					</Group>
				</UnstyledButton>
			</Link>
	);
};

export default Links;