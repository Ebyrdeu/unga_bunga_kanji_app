// User
export interface DataUser {
	id: string,
	name: string | null,
	image: string | null;
	email: string | null;
	role: string;

	curentlevel: number | null;
}

export interface DataKanji {
	kanji: string,
	kanji_level: number,
	kanji_meanings: string[] | null,
	kun_readings: string[] | null
	on_readings: string[] | null
}

export interface DataKanjiProps  {data: DataKanji[];}
export interface DataKanjiSortedProps  {sortedData: DataKanji[] | null;}

export interface AdminTableProps {data: DataUser[];}

export interface SortDataPayload<> {
	sortBy: keyof DataUser | null;
	reversed: boolean;
	search: string;
}

export interface ThProps {
	label: string;
	reversed: boolean;
	sorted: boolean;
	onSort: () => void;
}

