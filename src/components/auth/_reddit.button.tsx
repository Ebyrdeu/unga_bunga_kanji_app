import {Button, type ButtonProps, rem} from '@mantine/core';
import {IconBrandReddit} from '@tabler/icons-react';
import {type NextPage} from 'next';
import {signIn} from 'next-auth/react';

export const RedditButton: NextPage<ButtonProps> = (props) => {
  return (
      <Button
          onClick={() => void signIn('reddit')}
          leftIcon={<IconBrandReddit stroke={rem(2)} size={rem(16)}/>}
          sx={(theme) => ({
            backgroundColor: theme.colorScheme === 'dark' ? '#FF4500' : '#ff6a00',
            '&:hover': {
              backgroundColor:
                  theme.colorScheme === 'dark'
                      ? theme.fn.lighten('#FF4500', 0.05)
                      : theme.fn.darken('#FF4500', 0.05),
            },
          })}
          {...props}
      />
  );
};