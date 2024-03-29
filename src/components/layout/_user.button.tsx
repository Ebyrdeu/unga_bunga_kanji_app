import {useUserButtonStyles} from '@components/layout/styles/useUserButton.styles';
import {Avatar, Group, rem, Text, UnstyledButton} from '@mantine/core';
import {useBurgerStore} from '@store/store';
import {IconChevronRight} from '@tabler/icons-react';
import {type UserButtonProps} from '@type/layout';
import {useRouter} from 'next/router';
import {type FC} from 'react';

export const UserButton: FC<UserButtonProps> = ({image, name, level, profileLink, ...others}) => {
  const {classes} = useUserButtonStyles(undefined, undefined);
  const {push} = useRouter();
  const {toggleShow} = useBurgerStore();

  const redirect = () => {
    toggleShow();
    return void push(profileLink);
  };

  return (
      <UnstyledButton onClick={() => void redirect()} className={classes.user} {...others}>
        <Group>
          <Avatar src={image} alt={`${!name ? '' : name} profile picture`} radius={'xs'}>{name?.at(0)}</Avatar>
          <div style={{flex: 1}}>
            <Text size="sm" weight={500}>{name}</Text>
            <Text color="dimmed" size="xs">Current level : {level}</Text>
          </div>
          <IconChevronRight size={rem(18)} stroke={rem(1.5)}/>
        </Group>
      </UnstyledButton>
  );
};

