export interface UserKanjiProps {
	data: {
		kanji: string,
		kanji_level: number
		kanji_meanings: string[],
		kun_readings: string[]
		on_readings: string[]
		total_answers: number,
		correct_answers: number
		userId: string | null
	};
}