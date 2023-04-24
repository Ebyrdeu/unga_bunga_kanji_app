import {Button, type ButtonProps, rem} from '@mantine/core';
import {IconBrandDiscord} from '@tabler/icons-react';
import {signIn} from 'next-auth/react';
import {type FC} from 'react';

export const DiscordButton: FC<ButtonProps> = (props) => {
  return (
      <Button
          onClick={() => void signIn('discord')}
          leftIcon={<IconBrandDiscord stroke={rem(2)} size={rem(16)}/>}
          sx={(theme) => ({
            backgroundColor: theme.colorScheme === 'dark' ? '#5865F2' : '#5865F2',
            '&:hover': {
              backgroundColor:
                  theme.colorScheme === 'dark'
                      ? theme.fn.lighten('#5865F2', 0.05)
                      : theme.fn.darken('#5865F2', 0.05),
            },
          })}
          {...props}
      />
  );
};