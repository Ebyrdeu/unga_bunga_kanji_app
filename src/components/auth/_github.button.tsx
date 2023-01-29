import {Button, type ButtonProps} from "@mantine/core";
import {IconBrandGithub} from "@tabler/icons";
import {type NextPage} from "next";
import {signIn} from "next-auth/react";

export const GithubButton: NextPage<ButtonProps> = (props) => {
	return (
			<Button
					onClick={() => signIn("github")}
					{...props}
					leftIcon={<IconBrandGithub size={16}/>}
					sx={(theme) => ({
						backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[6],
						color: theme.colorScheme === 'dark' ?  theme.colors.dark[6] :  theme.colors.gray[0],
						"&:hover": {
							backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[2] : theme.colors.dark[6],
						},
					})}
			/>
	);
};