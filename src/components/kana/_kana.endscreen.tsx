import {Button} from '@mantine/core';
import {useKanaGameStore} from '@store/store';
import {IconRecycle} from '@tabler/icons';

export const KanaEndScreen = () => {
  const {handlers} = useKanaGameStore();
  return (
      <div>
        <Button leftIcon={<IconRecycle/>} onClick={() => handlers.set(0)}>Restart</Button>
      </div>
  );
};
