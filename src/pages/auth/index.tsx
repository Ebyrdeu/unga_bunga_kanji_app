import type {GetServerSideProps, NextPage} from "next";
import type {SignInTypesProps} from "@/@types/signIn";
import {Button, Center, Group, Text, Title} from "@mantine/core";
import {IconBrandDiscord, IconBrandGithub} from "@tabler/icons";
import {getProviders, signIn} from "next-auth/react";
import useUserLoginButtonStyles from "@/pages/auth/styles/_UseLoginButton.Styles";

export const getServerSideProps: GetServerSideProps = async () => {
	const providers = await getProviders();
	return {
		props: {
			providers,
		},
	};
};

const Index: NextPage<SignInTypesProps> = ({providers}) => {
	const {classes} = useUserLoginButtonStyles(undefined, undefined);

	if (!providers) return null;
	const {discord, github} = providers;

	return (
			<Center style={{width: "100vw", height: "100vh"}}>
				<div>
					<Title fz={"xl"} align="center">Unga Bunga Authentication</Title>
					<Text color="dimmed" size="sm" align="center">You dont have much choice, dont you ?</Text>


					<Group align={"center"} position={"center"} mt="xl">
						<Button
								onClick={() => signIn(github.id, {
									callbackUrl: "http://localhost:3000",
								})}
								leftIcon={<IconBrandGithub size={16} stroke={1.2}/>}
								className={classes.github}>Login with GitHub</Button>
						<Button
								onClick={() => signIn(discord.id, {
									callbackUrl: "http://localhost:3000",
								})}
								leftIcon={<IconBrandDiscord size={16} stroke={1.2}/>}
								className={classes.discord}>Login with Discord</Button>
					</Group>
				</div>
			</Center>
	);
};

export default Index;
