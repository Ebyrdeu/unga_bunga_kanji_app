import {Button} from '@mantine/core';
import {useKanaGameStore} from '@store/store';
import {IconRecycle} from '@tabler/icons-react';
import {type FC} from 'react';

export const KanaEndScreen: FC = () => {
  const {handlers} = useKanaGameStore();
  return (
      <div>
        <Button leftIcon={<IconRecycle/>} onClick={() => handlers.set(0)}>Restart</Button>
      </div>
  );
};
