export interface SortDataPayload<T> {
  sortBy: keyof T | null;
  reversed: boolean;
  search: string;
}