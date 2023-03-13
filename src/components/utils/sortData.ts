import {type SortDataPayload} from "@type/utils";
import {filterData} from "@components/utils/filterData";

export const sortData = <T extends Record<string, unknown>>(
    data: T[] | undefined, payload: SortDataPayload<T>) => {
  const {sortBy} = payload;

  if (!sortBy) return filterData(data, payload.search);

  const sortedData = Array.isArray(data) ? [...data].sort((a, b) => {
    const sortVal =
        typeof a[sortBy] === "string"
            ? (a[sortBy] as string).localeCompare(b[sortBy] as string)
            : typeof a[sortBy] === "number" && typeof b[sortBy] === "number"
                ? (a[sortBy] as number) - (b[sortBy] as number)
                : 0;
    return payload.reversed ? -sortVal : sortVal;
  }) : undefined;

  return filterData(sortedData, payload.search);
};
