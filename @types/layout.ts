import type {Dispatch, ReactNode, SetStateAction} from "react";
import type {MantineColor, UnstyledButtonProps} from "@mantine/core";
import type {TablerIcon} from "@tabler/icons";

// Layout
export interface LayoutPropsTypes {
	children: ReactNode;
}

// Header
export interface HeaderPropsTypes extends NavbarPropsTypes {
	setOpened: Dispatch<SetStateAction<boolean>>;
}

// Navbar/Aside
export interface NavbarPropsTypes {
	opened: boolean;
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
	Icon: TablerIcon;
	color?: MantineColor;
}