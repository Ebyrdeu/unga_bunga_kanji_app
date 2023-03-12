import {type ReactNode} from "react";

export interface ThProps {
  children: ReactNode;
  reversed: boolean;
  sorted: boolean;

  onSort(): void;
}
