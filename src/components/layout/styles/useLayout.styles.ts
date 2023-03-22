import {createStyles, type CSSObject} from '@mantine/core';

export const useLayoutStyles = createStyles((theme): Record<'appShell', CSSObject> => ({
  appShell: {
    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
  },
}));
