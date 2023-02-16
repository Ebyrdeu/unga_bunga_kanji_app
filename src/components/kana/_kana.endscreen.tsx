import {Button} from "@mantine/core";
import {IconRecycle} from "@tabler/icons";
import {useKanaGameStore} from "@store/store";

export const KanaEndScreen = () => {
  const {handlers} = useKanaGameStore();
  return (
      <div>
        <Button leftIcon={<IconRecycle/>} onClick={() => handlers.set(0)}>Restart</Button>
      </div>
  );
};
