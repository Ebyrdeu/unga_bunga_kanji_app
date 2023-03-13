import {ActionIcon, Anchor, Avatar, Badge, Group, ScrollArea, Table, Text, TextInput} from "@mantine/core";
import {type User} from "@prisma/client";
import {api} from "@utils/api";
import {IconArrowBadgeDown, IconArrowBadgeUp, IconSearch, IconTrash} from "@tabler/icons";
import {ADMIN_COLORS} from "@constant/colors";
import {type ChangeEvent, useState} from "react";
import {sortData} from "@components/utils";
import {Th} from "@components/admin/_th.table";

export const UserTable = ({data}: { data: User[] | undefined }) => {
  const {mutate: user_rank} = api.admin.updateUserRank.useMutation();
  const {mutate: delete_user} = api.admin.deleteUser.useMutation();

  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState<User[] | undefined>(data);
  const [sortBy, setSortBy] = useState<keyof User | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field: keyof User) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, {sortBy: field, reversed, search}));
  };

  const handleSearchChange = ({currentTarget}: ChangeEvent<HTMLInputElement>) => {
    const {value} = currentTarget;
    setSearch(value);
    setSortedData(sortData(data, {sortBy, reversed: reverseSortDirection, search: value}));
  };

  const rows = sortedData?.map(({id, image, name, userLevel, role, email}) => (
      <tr key={id}>
        <td>
          <Avatar variant={"filled"} src={image} radius={"xs"}>{name?.charAt(0)}</Avatar>
        </td>
        <td>
          <Text size="sm" weight={500}>{name}</Text>
        </td>
        <td>
          <Badge color={ADMIN_COLORS[role]} variant={"dot"}>{role}</Badge>
        </td>
        <td>
          <Anchor<"a"> size="sm" href="#" onClick={(event) => event.preventDefault()}>{email}</Anchor>
        </td>
        <td>
          <Text size="sm" color="dimmed">{userLevel}</Text>
        </td>
        <td>
          <Group spacing={0} position="right">
            <ActionIcon>
              {
                role === "ADMIN" ?
                    <IconArrowBadgeDown size={16} stroke={1.5} onClick={() => user_rank({id, role: "PEASANT"})}/> :
                    <IconArrowBadgeUp size={16} stroke={1.5} onClick={() => user_rank({id, role: "ADMIN"})}/>
              }
            </ActionIcon>
            <ActionIcon color="red">
              <IconTrash size={16} stroke={1.5} onClick={() => delete_user({id})}/>
            </ActionIcon>
          </Group>
        </td>
      </tr>
  ));

  return (
      <>
        <TextInput
            placeholder="Search by any field"
            mb="md"
            icon={<IconSearch size="0.9rem" stroke={1.5}/>}
            value={search}
            onChange={handleSearchChange}
        />
        <ScrollArea>
          <Table horizontalSpacing="md" verticalSpacing="xs" miw={700} sx={{tableLayout: "fixed"}}>
            <thead>
            <tr>
              <th>
                #
              </th>
              <Th
                  sorted={sortBy === "name"}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting("name")}
              >
                Username
              </Th>
              <Th
                  sorted={sortBy === "role"}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting("role")}
              >
                Role
              </Th>
              <Th
                  sorted={sortBy === "email"}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting("email")}
              >
                Email
              </Th>
              <Th
                  sorted={sortBy === "userLevel"}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting("userLevel")}
              >
                Level
              </Th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            {!rows ? null : rows.length > 0 ? (
                rows
            ) : (
                <tr>
                  <td colSpan={Object.keys(data ? data : [0]).length}>
                    <Text weight={500} align="center">
                      Nothing found
                    </Text>
                  </td>
                </tr>
            )}
            </tbody>
          </Table>
        </ScrollArea>
      </>
  );

};
