import {IconBrandAmongus, IconChevronLeft, IconChevronRight, IconTorii} from "@tabler/icons";
import {Avatar, Box, Group, Navbar, Text, UnstyledButton, useMantineTheme} from "@mantine/core";
import useUserButtonStyles from "@/components/layout/navbar/styles/_UserButton.Styles";
import useUser from "@/hooks/useUser";
import Link from "next/link";

const UserButton = () => {

	const {classes} = useUserButtonStyles(undefined, undefined);
	const {dir} = useMantineTheme();
	const user = useUser();

	if (!user) return null;

	const {curentlevel, name, image, role, } = user;

	return (
			<Navbar.Section>
				<Link style={{textDecoration: "none"}} href={"profile"}>
					<Box className={classes.wrapper}>
						<UnstyledButton className={classes.button}>
							<Group>
								<Avatar color={"blue"} radius="xl" src={image ? image : null}/>
								<Box sx={{flex: 1}}>
									<Group>
										<Text sx={{display: "flex"}} size="sm" weight={500}>{name ? name : "Anonymous Unga Bunga"}</Text>
										{role !== "admin" ? <IconBrandAmongus size={20}/> : <IconTorii size={20}/>}
									</Group>
									<Text color="dimmed" size="xs">level: {curentlevel ? curentlevel : 0}</Text>
								</Box>
								{dir === "ltr" ? <IconChevronRight size={18}/> : <IconChevronLeft size={18}/>}
							</Group>
						</UnstyledButton>
					</Box>
				</Link>

			</Navbar.Section>
	);
};

export default UserButton;