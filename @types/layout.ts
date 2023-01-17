import type {Dispatch} from "react";
import {TablerIcon} from "@tabler/icons";
import {MantineColor} from "@mantine/core";

export interface NavbarProps<T = boolean> {readonly  opened: T;}

export interface HeaderProps<T = boolean> {
	readonly  opened: T,
	setOpened: Dispatch<(value: T) => T>
}

export interface LinksProps {
	icon: TablerIcon;
	label: string;
	link?: string;
	color?: MantineColor;
	initiallyOpened?: boolean;
	links?: { label: string; link: string }[];
}