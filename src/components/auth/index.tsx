import {Group} from "@mantine/core";
import {DiscordButton} from "@components/auth/_discord.button";
import {GithubButton} from "@components/auth/_github.button";
import {type NextPage} from "next";

export const SocialButtons: NextPage = () => {
  return (
      <Group position="center" sx={{padding: 15}}>
        <GithubButton>Login with GitHub</GithubButton>
        <DiscordButton>Login with Discord</DiscordButton>
      </Group>
  );
};