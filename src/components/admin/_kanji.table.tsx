import {Button, Group, ScrollArea, Table, Text, TextInput} from "@mantine/core";
import {IconSearch} from "@tabler/icons";
import {type Kanji} from "@prisma/client";
import {type ChangeEvent, useState} from "react";
import {sortData} from "@components/utils";
import {Th} from "@components/admin/_th.table";
import {KanjiTableForm} from "@components/admin/_kanji.table.form";

export const KanjiTable = ({data}: { data: Kanji[] | undefined }) => {
  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState<Kanji[] | undefined>(data);
  const [sortBy, setSortBy] = useState<keyof Kanji | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field: keyof Kanji) => {
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

  const rows = sortedData?.map((kanji) => (
      <tr key={kanji.id}>
        <td>{kanji.kanji}</td>
        <td>{kanji.level}</td>
        <td>{kanji.meanings.join(", ")}</td>
        <td>{kanji.kun_readings.join(", ")}</td>
        <td>{kanji.on_readings.join(", ")}</td>
        <td>{kanji.createdAt.toLocaleString()}</td>
        <td>{kanji.updatedAt.toLocaleString()}</td>
      </tr>
  ));

  return (
      <>
        <KanjiTableForm>
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
        </KanjiTableForm>
        <ScrollArea sx={{width: "100%"}}>
          <Table horizontalSpacing="md" verticalSpacing="xs" miw={700} sx={{tableLayout: "fixed"}}>
            <thead>
            <tr>
              <Th
                  sorted={sortBy === "kanji"}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting("kanji")}
              >
                Kanji
              </Th>
              <Th
                  sorted={sortBy === "level"}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting("level")}
              >
                Level
              </Th>
              <Th
                  sorted={sortBy === "meanings"}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting("meanings")}
              >
                Meanings
              </Th>
              <Th
                  sorted={sortBy === "kun_readings"}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting("kun_readings")}
              >
                訓読み
              </Th>
              <Th
                  sorted={sortBy === "on_readings"}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting("on_readings")}
              >
                音読み
              </Th>
              <Th
                  sorted={sortBy === "createdAt"}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting("createdAt")}
              >
                Created At
              </Th>
              <Th
                  sorted={sortBy === "updatedAt"}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting("updatedAt")}
              >
                Updated At
              </Th>
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




