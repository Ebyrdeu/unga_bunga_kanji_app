import {ActionIcon} from "@mantine/core";

import {type TablerIcon} from "@tabler/icons";
import {type NextPage} from "next";

export const KanaInputActionIcon: NextPage<{ icon: TablerIcon }> = ({icon}) => {
  const Icon = icon;
  return (
      <ActionIcon aria-label="submit answer" type={"submit"} size="xl" variant="transparent">
        <Icon stroke={2} size={34}/>
      </ActionIcon>
  );
};
