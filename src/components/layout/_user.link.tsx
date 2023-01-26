import {Badge, Box, Group, ThemeIcon, UnstyledButton} from "@mantine/core";
import {type NextPage} from "next";
import {useUserLinksStyles} from "@components/layout/styles/useUserLinks.styles";
import {type UserLinkProps} from "@type/layout";
import {useRouter} from "next/router";

const UserLink: NextPage<UserLinkProps> = ({
	label,
	notification,
	pageLink,
	Icon,
	color = "blue",
}) => {
	const {classes} = useUserLinksStyles();
	const {push} = useRouter();
	return (
			<UnstyledButton onClick={() => push(pageLink)} className={classes.control}>
				<Group position="apart" spacing={0}>
					<Box sx={{display: "flex", alignItems: "center"}}>
						<ThemeIcon color={color} variant="light" size={30}>
							<Icon size={18}/>
						</ThemeIcon>
						<Box ml="md">{label}</Box>
					</Box>
					{notification && <Badge color={color} size="sm" variant="gradient" className={classes.badge}>{notification}</Badge>}
				</Group>
			</UnstyledButton>
	);
};

export default UserLink;