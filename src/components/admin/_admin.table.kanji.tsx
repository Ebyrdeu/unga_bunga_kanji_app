import type {NextPage} from "next";
import {DataKanji, DataKanjiProps} from "@/@types";
import type {ChangeEvent} from "react";
import {useState} from "react";
import {sortData} from "@/components/utils";
import {ActionIcon, Badge, Button, Group, ScrollArea, Table, Text, TextInput, useMantineTheme} from "@mantine/core";
import {IconSearch, IconTrash} from "@tabler/icons";
import AdminTableKanjiAdd from "@/components/admin/_admin.table.kanji-add";
import ThAdmin from "@/components/admin/_Th.Admin";
import {trpc} from "@/src/utils";
import {LEVEL_COLORS} from "@/@constants/_Admin.Table";

const AdminTableKanji: NextPage<DataKanjiProps> = ({data}) => {
	const {mutate: kanji_delete} = trpc.kanji_delete.useMutation();
	const theme = useMantineTheme();
	const [search, setSearch] = useState<string>("");
	const [sortedData, setSortedData] = useState<DataKanji[] | null>(data);
	const [sortBy, setSortBy] = useState<keyof DataKanji | null>(null);
	const [reverseSortDirection, setReverseSortDirection] = useState<boolean>(false);

	const setSorting = (field: keyof DataKanji) => {
		const reversed = field === sortBy ? !reverseSortDirection : false;
		setReverseSortDirection(reversed);
		setSortBy(field);

		// @ts-ignore
		setSortedData(sortData(data, {sortBy: field, reversed, search}));
	};

	const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
		const {value} = event.currentTarget;
		setSearch(value);
// @ts-ignore
		setSortedData(sortData(data, {sortBy, reversed: reverseSortDirection, search: value}));
	};

	const rows = sortedData?.map((data) => {
		const {kanji, kanji_level, kanji_meanings, kun_readings, on_readings} = data;
		return (
				<tr key={kanji}>
					<td>
						<Text size="sm" weight={500}>{kanji}</Text>
					</td>
					<td>
						<Badge
								color={LEVEL_COLORS[`level_${kanji_level}`]}
								variant={theme.colorScheme === "dark" ? "light" : "outline"}
						>
							Level: {kanji_level}
						</Badge>
					</td>
					<td>
						{kanji_meanings?.map((item, i) => <Text key={i} size="sm" color="dimmed">{item}</Text>)}
					</td>
					<td>
						{kun_readings?.map((item, i) => <Text key={i} size="sm" color="dimmed">{item}</Text>)}
					</td>
					<td>
						{on_readings?.map((item, i) => <Text key={i} size="sm" color="dimmed">{item}</Text>)}
					</td>
					<td>
						<Group spacing={0} position="right">
							<ActionIcon>

							</ActionIcon>
							<ActionIcon color="red">
								<IconTrash size={16} stroke={1.5} onClick={() => kanji_delete({kanji})}/>
							</ActionIcon>
						</Group>
					</td>
				</tr>
		);
	});

	return (
			<ScrollArea>
				<AdminTableKanjiAdd>
					<Group align={"center"} mb="md">
						<TextInput
								sx={{flex: 1}}
								placeholder="Search by any field"
								icon={<IconSearch size={14} stroke={1.5}/>}
								value={search}
								onChange={handleSearchChange}
						/>
						<Button type={"submit"}>Add Kanji</Button>
					</Group>
				</AdminTableKanjiAdd>
				<Table
						horizontalSpacing="md"
						verticalSpacing="xs"
						sx={{tableLayout: "fixed", minWidth: 700}}
				>
					<thead>
					<tr>
						<ThAdmin
								sorted={sortBy === "kanji"}
								reversed={reverseSortDirection}
								onSort={() => setSorting("kanji")}
								label={"漢字"}/>
						<ThAdmin
								sorted={sortBy === "kanji_level"}
								reversed={reverseSortDirection}
								onSort={() => setSorting("kanji_level")}
								label={"漢字のレベル"}/>
						<ThAdmin
								sorted={sortBy === "kanji_meanings"}
								reversed={reverseSortDirection}
								onSort={() => setSorting("kanji_meanings")}
								label={"意味"}/>
						<ThAdmin
								sorted={sortBy === "kun_readings"}
								reversed={reverseSortDirection}
								onSort={() => setSorting("kun_readings")}
								label={"訓読み"}/>
						<ThAdmin
								sorted={sortBy === "on_readings"}
								reversed={reverseSortDirection}
								onSort={() => setSorting("on_readings")}
								label={"音読み"}/>
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

export default AdminTableKanji;