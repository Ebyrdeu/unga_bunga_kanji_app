export interface ThProps {
  content: string;
  reversed: boolean;
  sorted: boolean;

  onSort(): void;
}
