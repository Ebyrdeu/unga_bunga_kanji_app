import {Button, Group, Text} from '@mantine/core';
import {IconArrowBack} from '@tabler/icons';
import {useRouter} from 'next/router';

export const NoLesson = () => {
  const {back} = useRouter();
  return (
      <div>
        <Text my={20} align={'center'} fz="xl" tt="uppercase" fw={700} c="dimmed">
          No lesson available
        </Text>
        <Group position={'center'}>
          <Button onClick={() => back()} leftIcon={<IconArrowBack/>} size="md">Take me back to previous
            page</Button>
        </Group>
      </div>
  );
};
