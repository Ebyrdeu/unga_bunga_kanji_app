import {Center, Group, Text, UnstyledButton} from '@mantine/core';
import {IconChevronDown, IconChevronUp, IconSelector} from '@tabler/icons';
import {type ThProps} from '@type/admin';

export const Th = ({content, reversed, sorted, onSort}: ThProps) => {
  const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
  return (
      <th>
        <UnstyledButton onClick={onSort}>
          <Group position="apart">
            <Text fw={500} fz="sm">
              {content}
            </Text>
            <Center>
              <Icon/>
            </Center>
          </Group>
        </UnstyledButton>

      </th>
  );
};

