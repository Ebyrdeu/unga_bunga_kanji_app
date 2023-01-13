import type {Dispatch} from "react";
import {TablerIcon} from "@tabler/icons";

export interface NavbarProps<T = boolean> {readonly  opened: T;}

export interface HeaderProps<T = boolean> {
	readonly  opened: T,
	setOpened: Dispatch<(value: T) => T>
}
export interface NestedLinksProps {
	icon: TablerIcon;
	label: string;
	initiallyOpened?: boolean;
	links?: { label: string; link: string }[];
}