import {Button, Group, rem, Text} from '@mantine/core';
import {IconArrowBack} from '@tabler/icons-react';
import {useRouter} from 'next/router';
import {type FC} from 'react';

export const NoLesson: FC<{ text: 'lessons' | 'reviews' }> = ({text}) => {
  const {push} = useRouter();
  return (
      <div>
        <Text my={rem(20)} align={'center'} fz="xl" tt="uppercase" fw={700} c="dimmed">
          No {text} available
        </Text>
        <Group position={'center'}>
          <Button onClick={() => void push('/')} leftIcon={<IconArrowBack/>} size="md">BACK</Button>
        </Group>
      </div>
  );
};
