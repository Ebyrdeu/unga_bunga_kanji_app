import type {MantineColor, UnstyledButtonProps} from '@mantine/core';
import type {TablerIcon} from '@tabler/icons';
import type {ReactNode} from 'react';

// Layout
export interface LayoutPropsTypes {
  children: ReactNode;
}

export interface UserButtonProps extends UnstyledButtonProps {
  image: string | null;
  name: string | null;
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