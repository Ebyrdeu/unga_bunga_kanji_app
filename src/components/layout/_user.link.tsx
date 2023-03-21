import {useUserLinksStyles} from '@components/layout/styles/useUserLinks.styles';
import {Badge, Box, Group, ThemeIcon, UnstyledButton} from '@mantine/core';
import {useBurgerStore} from '@store/store';
import {type UserLinkProps} from '@type/layout';
import {type NextPage} from 'next';
import {useRouter} from 'next/router';

export const UserLink: NextPage<UserLinkProps> = ({
  label,
  notification,
  pageLink,
  icon,
  color = 'blue',
}) => {
  const {classes} = useUserLinksStyles();
  const {push} = useRouter();
  const {toggleShow} = useBurgerStore();
  const Icon = icon;

  const redirect = () => {
    toggleShow();
    return push(pageLink);
  };

  return (
      <UnstyledButton onClick={() => void redirect()} className={classes.control}>
        <Group position="apart" spacing={0}>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <ThemeIcon color={color} variant="light" size={30}>
              <Icon size={18}/>
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {notification &&
              <Badge color={color} size="sm" variant="gradient" className={classes.badge}>{notification}</Badge>}
        </Group>
      </UnstyledButton>
  );
};

