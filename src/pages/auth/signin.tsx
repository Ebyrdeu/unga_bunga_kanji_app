import {Button, Center, Group, Paper, Text, Title} from "@mantine/core";
import {IconBrandDiscord, IconBrandGithub} from "@tabler/icons";
import {getProviders, signIn} from "next-auth/react";
import useUserLoginButtonStyles from "@/pages/auth/styles/_UseLoginButton.Styles";
import {GetServerSideProps, NextPage} from "next";
import {SignInTypesProps} from "@/@types/signIn";

export const getServerSideProps: GetServerSideProps = async () => {
	const providers = await getProviders();
	return {
		props: {
			providers,
		},
	};
};

const Signin: NextPage<SignInTypesProps> = ({providers}) => {
	const {classes} = useUserLoginButtonStyles(undefined, undefined);

	if (!providers) return null;

	const {discord, github} = providers;

	return (
			<Center style={{width: "100vw", height: "100vh"}}>
				<div>
					<Title fz={"xl"} align="center">Unga Bunga Authentication</Title>
					<Text color="dimmed" size="sm" align="center">Please choose between two options</Text>

					<Paper withBorder shadow="md" p={30} radius="md" mt="xl">
						<Group grow mb="md" mt="md">
							<Button
									onClick={() => signIn(github.id, {
										callbackUrl: 'http://localhost:3000/',
									})}
									leftIcon={<IconBrandGithub size={16} stroke={1.2}/>}
									className={classes.github}>Login with GitHub</Button>
							<Button
									onClick={() => signIn(discord.id, {
										callbackUrl: 'http://localhost:3000/',
									})}
									leftIcon={<IconBrandDiscord size={16} stroke={1.2}/>}
									className={classes.discord}>Join Discord community</Button>
						</Group>
					</Paper>
				</div>
			</Center>
	);
};

export default Signin;
