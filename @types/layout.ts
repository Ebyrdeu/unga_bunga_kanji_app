import type {Dispatch} from "react";

export interface NavbarProps<T = boolean> {readonly  opened: T;}

export interface HeaderProps<T = boolean> {
	readonly  opened: T,
	setOpened: Dispatch<(value: T) => T>
}
