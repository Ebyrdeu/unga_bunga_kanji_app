import {useUserLinksStyles} from '@components/layout/styles/useUserLinks.styles';
import {Badge, Box, Group, rem, ThemeIcon, UnstyledButton} from '@mantine/core';
import {useBurgerStore} from '@store/store';
import {type TablerIconsProps} from '@tabler/icons-react';
import {type UserLinkProps} from '@type/layout';
import {useRouter} from 'next/router';
import {type FC} from 'react';

export const UserLink: FC<UserLinkProps> = ({
  label,
  notification,
  pageLink,
  icon,
  color = 'blue',
}) => {
  const {classes} = useUserLinksStyles(undefined, undefined);
  const {push} = useRouter();
  const {toggleShow} = useBurgerStore();
  const Icon = icon as FC<TablerIconsProps>;

  const redirect = () => {
    toggleShow();
    return void push(pageLink);
  };

  return (
      <UnstyledButton onClick={() => void redirect()} className={classes.control}>
        <Group position="apart" spacing={0}>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <ThemeIcon color={color} variant="light" size={rem(30)}>
              <Icon size={rem(18)}/>
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {notification && <Badge color={color} size="sm" variant="gradient" className={classes.badge}>{notification}</Badge>}
        </Group>
      </UnstyledButton>
  );
};

