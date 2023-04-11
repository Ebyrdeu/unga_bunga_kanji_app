import {ScrollArea, Table} from '@mantine/core';

const TableInit = ({type, rows}: { type: 'kanji' | 'user', rows: JSX.Element[] }) => {

  const kanji = ['Kanji', 'Level', 'Meanings', 'Kun’yomi', 'On’yomi', 'Created At', 'Updated At', 'Actions'];
  const user = ['#', 'Username', 'Role', 'Email', 'Level', 'Actions'];

  const column = type === 'kanji' ? kanji.map(c => <th key={c}>{c}</th>) : user.map(c => <th key={c}>{c}</th>);

  return (
      <ScrollArea  mt={'md'} sx={{width: '100%'}}>
        <Table striped highlightOnHover horizontalSpacing="md" verticalSpacing="xs" miw={700}
               sx={{tableLayout: 'fixed'}}>
          <thead>
          <tr>
            {column}
          </tr>
          </thead>
          <tbody>
          {rows}
          </tbody>
        </Table>
      </ScrollArea>
  );
};

export default TableInit;