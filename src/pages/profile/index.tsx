import {Avatar, Button, Card, createStyles, Group, Text} from "@mantine/core";
import {getSession, GetSessionParams, signOut} from "next-auth/react";
import {IconLogout} from "@tabler/icons";
import useUser from "@/hooks/useUser";
import LoadingOverlayCustom from "@/components/overlay/LoadingOverlay.Custom";

const useStyles = createStyles((theme) => ({
	card: {
		height: "100%",
		backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
	},

	avatar: {
		border: `2px solid ${theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white}`,
	},
	cardSection: {
		height: 140,

		backgroundColor: theme.colors.blue[6],
	},
}));

const Profile = () => {
	const {classes, theme} = useStyles();
	const user = useUser();

	if (!user) return null;

	const {role, name, image, email, curentlevel, isLoading} = user;

	return (
			<LoadingOverlayCustom visible={isLoading}>
			<Card radius={"xs"} className={classes.card}>
				<Card.Section className={classes.cardSection}/>
				<Avatar src={image} size={80} radius={80} mx="auto" mt={-30} className={classes.avatar}/>
				<Text align="center" size="lg" weight={500} mt="sm">{name}</Text>
				<Text align="center" size="sm" color="dimmed">{email}</Text>
				<Group mt="md" position="center" spacing={30}>
					<div>
						<Text align="center" size="lg" weight={500}>Role</Text>
						<Text align="center" size="sm" color="dimmed">{role}</Text>
					</div>
					<div>
						<Text align="center" size="lg" weight={500}>Current Level</Text>
						<Text align="center" size="sm" color="dimmed">{curentlevel}</Text>
					</div>
				</Group>
				<Button
						onClick={() => signOut()}
						leftIcon={<IconLogout/>}
						fullWidth
						radius="md"
						mt="xl"
						size="md"
						color={theme.colorScheme === "dark" ? undefined : "dark"}
				>Logout
				</Button>
			</Card>
			</LoadingOverlayCustom>
	);
};

export default Profile;

export async function getServerSideProps(context: GetSessionParams) {
	const session = await getSession(context);
	if (!session) {
		return {
			redirect: {
				destination: "/auth",
				permanent: false,
			},
		};
	}

	return {
		props: {session},
	};
}