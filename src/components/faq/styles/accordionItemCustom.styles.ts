import {createStyles, type CSSObject} from '@mantine/core';

export const useAccordionItemCustomStyles = createStyles((theme): Record<'item', CSSObject> => ({
  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,

    border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));
