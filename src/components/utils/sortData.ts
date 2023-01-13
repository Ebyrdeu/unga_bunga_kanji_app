import type {DataUser, SortDataPayload} from "@/@types";
import {filterData} from "@/components/utils/filterData";

export const sortData = (data: DataUser[], payload: SortDataPayload) => {

	const {sortBy} = payload;

	if (!sortBy) filterData(data, payload.search);

	return filterData(
			[...data].sort((a: any, b: any) => {
				if (payload.reversed) {
					if (typeof b[sortBy || 'null'] === "string") return b[sortBy || 'null'].localeCompare(a[sortBy || 'null'].toString());
					return a[sortBy || 'null'] - b[sortBy || 'null'];
				}

				if (typeof b[sortBy || 'null'] === "string") return a[sortBy || 'null'].localeCompare(b[sortBy || 'null'].toString());
				return b[sortBy || 'null'] - a[sortBy || 'null'];
			}),
			payload.search,
	);
};