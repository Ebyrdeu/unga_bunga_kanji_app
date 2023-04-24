import {GithubButton} from '@components/auth/_github.button';
import {RedditButton} from '@components/auth/_reddit.button';
import {Group} from '@mantine/core';
import {type FC} from 'react';

export const SocialButtons: FC = () => {
  return (
      <Group position="center" sx={{padding: 15}}>
        <GithubButton>Login with GitHub</GithubButton>
        {/* <DiscordButton>Login with Discord</DiscordButton>*/}
        <RedditButton>Login with Reddit</RedditButton>
      </Group>
  );
};

