import {KanjiTableForm} from '@components/admin/_kanji.table.form';
import TableInit from '@components/admin/_table.init';
import {ActionIcon, Group, rem} from '@mantine/core';
import {type Kanji} from '@prisma/client';
import {IconTrash} from '@tabler/icons-react';
import {api} from '@utils/api';

export const KanjiTable = ({data}: { data: Kanji[] }) => {
  const ctx = api.useContext();
  const {mutate: delete_kanji} = api.admin.deleteKanji.useMutation({
    onSuccess() {
      void ctx.kanji.getAll.invalidate();
    },
  });

  const rows = data.map((kanji) => (
      <tr key={kanji.id}>
        <td>{kanji.kanji}</td>
        <td>{kanji.level}</td>
        <td>{kanji.meanings.join(', ')}</td>
        <td>{kanji.kun_readings.join(', ')}</td>
        <td>{kanji.on_readings.join(', ')}</td>
        <td>{kanji.createdAt.toLocaleString()}</td>
        <td>{kanji.updatedAt.toLocaleString()}</td>
        <td>
          <Group spacing={0}>
            <ActionIcon color="red">
              <IconTrash size={rem(16)} stroke={rem(1.5)} onClick={() => void delete_kanji({kanji: kanji.kanji})}/>
            </ActionIcon>
          </Group>
        </td>
      </tr>
  ));
  return (
      <>
        <KanjiTableForm/>
        <TableInit type={'kanji'} rows={rows}/>
      </>
  );
};




