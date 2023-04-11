import TableInit from '@components/admin/_table.init';
import {ADMIN_COLORS} from '@constant/colors';
import {ActionIcon, Anchor, Avatar, Badge, Group, rem, Text} from '@mantine/core';
import {type User} from '@prisma/client';
import {IconArrowBadgeDown, IconArrowBadgeUp, IconTrash} from '@tabler/icons-react';
import {api} from '@utils/api';

export const UserTable = ({data}: { data: User[] }) => {
  const utils = api.useContext();

  const {mutate: user_rank} = api.admin.updateUserRank.useMutation({
    onSuccess() {
      void utils.admin.getAllUsers.invalidate();
    },
  });

  const {mutate: delete_user} = api.admin.deleteUser.useMutation({
    onSuccess() {
      void utils.admin.getAllUsers.invalidate();
    },
  });

  const rows = data.map(({id, image, name, userLevel, role, email}) => (
      <tr key={id}>
        <td>
          <Avatar variant={'filled'} src={image} radius={'xs'}>{name?.charAt(0)}</Avatar>
        </td>
        <td>
          <Text size="sm" weight={500}>{name}</Text>
        </td>
        <td>
          <Badge color={ADMIN_COLORS[role]} variant={'dot'}>{role}</Badge>
        </td>
        <td>
          <Anchor<'a'> size="sm" href="#" onClick={(event) => event.preventDefault()}>{email}</Anchor>
        </td>
        <td>
          <Text size="sm" color="dimmed">{userLevel}</Text>
        </td>
        <td>
          <Group spacing={0}>
            <ActionIcon>
              {
                role === 'ADMIN' ?
                    <IconArrowBadgeDown size={rem(16)} stroke={rem(1.5)}
                                        onClick={() => user_rank({id, role: 'PEASANT'})}/> :
                    <IconArrowBadgeUp size={rem(16)} stroke={rem(1.5)} onClick={() => user_rank({id, role: 'ADMIN'})}/>
              }
            </ActionIcon>
            <ActionIcon color="red">
              <IconTrash size={rem(16)} stroke={rem(1.5)} onClick={() => void delete_user({id})}/>
            </ActionIcon>
          </Group>
        </td>
      </tr>
  ));

  return <TableInit type={'user'} rows={rows}/>;

};
