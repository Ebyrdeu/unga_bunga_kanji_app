import {Button, type ButtonProps, rem} from '@mantine/core';
import {IconBrandGithub} from '@tabler/icons-react';
import {signIn} from 'next-auth/react';
import {type FC} from 'react';

export const GithubButton: FC<ButtonProps> = (props) => {
  return (
      <Button
          onClick={() => void signIn('github')}
          {...props}
          leftIcon={<IconBrandGithub stroke={rem(2)} size={rem(16)}/>}
          sx={(theme) => ({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[6],
            color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            '&:hover': {
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[2] : theme.colors.dark[6],
            },
          })}
      />
  );
};