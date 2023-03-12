import {type SortDataPayload} from "@type/utils";
import {filterData} from "@components/utils/filterData";

export const sortData = <T extends Record<string, any>>(data: T[] | undefined, payload: SortDataPayload<T>) => {
  const {sortBy} = payload;

  if (!sortBy) return filterData(data, payload.search);

  const sortedData = Array.isArray(data) ? [...data].sort((a, b) => {
    const sortVal = (typeof a[sortBy] === "string") ? a[sortBy].localeCompare(b[sortBy]) : a[sortBy] - b[sortBy];
    return payload.reversed ? -sortVal : sortVal;
  }) : undefined;

  return filterData(sortedData, payload.search);
};
