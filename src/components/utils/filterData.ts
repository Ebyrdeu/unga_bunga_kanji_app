import {keys} from "@mantine/utils";
import type {DataUser} from "@/@types";

export const filterData = (data: DataUser[], search: string) => {

	const query = search.toLowerCase().trim();
	return data.filter((item) =>
			keys(data[0]).some((key) => item[key]?.toString().toLowerCase().includes(query)),
	);
};