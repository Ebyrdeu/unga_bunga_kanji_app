import {ActionIcon, rem} from '@mantine/core';
import {type TablerIconsProps} from '@tabler/icons-react';
import {type NextPage} from 'next';
import {type FC} from 'react';

export const KanaInputActionIcon: NextPage<{ icon: FC<TablerIconsProps> }> = ({icon}) => {
  const Icon = icon ;
  return (
      <ActionIcon aria-label="submit answer" type={'submit'} size="xl" variant="transparent">
        <Icon stroke={rem(2)} size={rem(34)}/>
      </ActionIcon>
  );
};
