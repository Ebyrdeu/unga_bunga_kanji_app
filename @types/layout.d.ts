import type {ReactNode} from "react";
import type {MantineColor, UnstyledButtonProps} from "@mantine/core";
import type {TablerIcon} from "@tabler/icons";

// Layout
export interface LayoutPropsTypes {
  children: ReactNode;
}

export interface UserButtonProps extends UnstyledButtonProps {
  image: string;
  name: string;
  level: number;
  profileLink: string;
}

export interface UserLinkProps {
  label: string;
  notification?: number;
  pageLink: string;
  icon: TablerIcon;
  color?: MantineColor;
}