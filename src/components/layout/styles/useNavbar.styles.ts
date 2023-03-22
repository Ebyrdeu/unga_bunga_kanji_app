import {createStyles, type CSSObject} from '@mantine/core';

export const useUserNavbarStyles = createStyles(
    (theme): Record<'navbar' | 'section' | 'searchCode' | 'mainLinks', CSSObject> => ({
      navbar: {
        paddingTop: 0,
      },

      section: {
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
        marginBottom: theme.spacing.md,

        '&:not(:last-of-type)': {
          borderBottom: `1px solid ${
              theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
          }`,
        },
      },

      searchCode: {
        fontWeight: 700,
        fontSize: 10,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        border: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]
        }`,
      },

      mainLinks: {
        paddingLeft: theme.spacing.md - theme.spacing.xs,
        paddingRight: theme.spacing.md - theme.spacing.xs,
        paddingBottom: theme.spacing.sm,
      },

    }));