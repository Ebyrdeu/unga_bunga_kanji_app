import {createStyles, type CSSObject} from '@mantine/core';

export const useHeaderStyles = createStyles((theme): Record<'wrapper' | 'actionIcon', CSSObject> => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  actionIcon: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
  },

}));
