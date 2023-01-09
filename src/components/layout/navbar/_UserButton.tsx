import {IconChevronLeft, IconChevronRight} from "@tabler/icons";
import {Avatar, Box, Group, Navbar, Text, UnstyledButton, useMantineTheme} from "@mantine/core";
import useUserButtonStyles from "@/components/layout/navbar/styles/_UserButton.Styles";
import {useSession} from "next-auth/react";

const UserButton = () => {

	const {classes} = useUserButtonStyles(undefined, undefined);
	const {dir} = useMantineTheme();
	const {data: session} = useSession();

	return (
			<Navbar.Section>
				<Box className={classes.wrapper}>
					<UnstyledButton className={classes.button}>
						<Group>
							<Avatar color={"blue"} radius="xl" src={session ? session.user?.image : null}/>
							<Box sx={{flex: 1}}>
								<Text size="sm" weight={500}>{session ? session.user?.name : "Anonymous Unga Bunga"}</Text>
								<Text color="dimmed" size="xs">level: 1</Text>
							</Box>

							{dir === "ltr" ? <IconChevronRight size={18}/> : <IconChevronLeft size={18}/>}
						</Group>
					</UnstyledButton>
				</Box>
			</Navbar.Section>
	);
};

export default UserButton;