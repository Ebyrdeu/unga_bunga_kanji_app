import {createStyles, type CSSObject, rem} from '@mantine/core';

export const useProfileCardStyles = createStyles((theme): Record<'card' | 'cardSection' | 'avatar', CSSObject> => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  cardSection: {
    backgroundImage: `url(https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`,
    height: rem(140),
    backgroundSize: 'cover',
  },

  avatar: {
    border: `5px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
  },
}));