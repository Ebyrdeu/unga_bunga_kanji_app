import type {NextPage} from "next";
import type {AdminTableProps, DataUser} from "@/@types";
import type {ChangeEvent} from "react";
import {useState} from "react";
import {sortData} from "@/components/utils";
import {ActionIcon, Anchor, Avatar, Badge, Group, ScrollArea, Table, Text, TextInput, useMantineTheme} from "@mantine/core";
import {IconArrowBadgeDown, IconArrowBadgeUp, IconSearch, IconTrash} from "@tabler/icons";
import ThAdmin from "@/components/admin/_Th.Admin";
import {JOB_COLORS} from "@/@constants/_Admin.Table";
import {trpc} from "@/src/utils";

const AdminTableUser: NextPage<AdminTableProps> = ({data}) => {
	const {mutate: delete_user} = trpc.delete_user.useMutation();
	const {mutate: user_rank} = trpc.user_rank.useMutation();
	const theme = useMantineTheme();
	const [search, setSearch] = useState<string>("");
	const [sortedData, setSortedData] = useState<DataUser[] | null>(data);
	const [sortBy, setSortBy] = useState<keyof DataUser | null>(null);
	const [reverseSortDirection, setReverseSortDirection] = useState<boolean>(false);
	const setSorting = (field: keyof DataUser) => {
		const reversed = field === sortBy ? !reverseSortDirection : false;
		setReverseSortDirection(reversed);
		setSortBy(field);
		setSortedData(sortData(data, {sortBy: field, reversed, search}));
	};

	const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
		const {value} = event.currentTarget;
		setSearch(value);
		setSortedData(sortData(data, {sortBy, reversed: reverseSortDirection, search: value}));
	};

	const rows = sortedData?.map(({id, name, email, image, curentlevel, role}) => 	 (
			<tr key={id}>
				<td>
					<Group spacing="sm">
						<Avatar size={30} src={image} radius={30}/>
						<Text size="sm" weight={500}>
							{name}
						</Text>
					</Group>
				</td>
				<td>
					<Badge
							color={JOB_COLORS[role.toLowerCase()]}
							variant={theme.colorScheme === "dark" ? "light" : "outline"}
					>
						{role}
					</Badge>
				</td>
				<td>
					<Anchor<"a"> size="sm" href="#" onClick={(event) => event.preventDefault()}>
						{email}
					</Anchor>
				</td>
				<td>
					<Text size="sm" color="dimmed">
						{curentlevel}
					</Text>
				</td>
				<td>
					<Group spacing={0} position="right">
						<ActionIcon>
							{
								role === "admin" ? <IconArrowBadgeDown size={16} stroke={1.5} onClick={() => user_rank({id, role: "peasant"})}/> :
										<IconArrowBadgeUp size={16} stroke={1.5} onClick={() => user_rank({id, role: "admin"})}/>
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
			<ScrollArea sx={{height: "100%"}}>
				<TextInput
						placeholder="Search by any field"
						mb="md"
						icon={<IconSearch size={14} stroke={1.5}/>}
						value={search}
						onChange={handleSearchChange}
				/>
				<Table
						horizontalSpacing="md"
						verticalSpacing="xs"
						sx={{tableLayout: "fixed", minWidth: 700}}
				>
					<thead>
					<tr>
						<ThAdmin
								sorted={sortBy === "name"}
								reversed={reverseSortDirection}
								onSort={() => setSorting("name")}
								label={"\t\tUsername"}/>
						<ThAdmin
								sorted={sortBy === "role"}
								reversed={reverseSortDirection}
								onSort={() => setSorting("role")}
								label={"Role"}/>
						<ThAdmin
								sorted={sortBy === "email"}
								reversed={reverseSortDirection}
								onSort={() => setSorting("email")}
								label={"Email"}/>
						<ThAdmin
								sorted={sortBy === "email"}
								reversed={reverseSortDirection}
								onSort={() => setSorting("email")}
								label={"\tCurrent level"}/>
						<th/>
					</tr>
					</thead>
					<tbody>
					{rows}
					</tbody>
				</Table>
			</ScrollArea>
	);
};

export default AdminTableUser;