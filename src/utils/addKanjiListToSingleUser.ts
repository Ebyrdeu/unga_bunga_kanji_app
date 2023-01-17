export const AddKanjiListToSingleUser = async (session: any) => {
	const globalKanjiList = await prisma?.kanji.findMany();
	// @ts-ignore
	const createNewKanjiListForSingleUser = globalKanjiList?.map((data) => ({
		kanjiId: `${data.kanji}_${session.user?.id}`,
		kanji: data.kanji,
		kanji_level: data.kanji_level,
		kanji_meanings: data.kanji_meanings,
		kun_readings: data.kun_readings,
		on_readings: data.on_readings,
		// @ts-ignore
		userId: session.user?.id,
	}));

	// @ts-ignore
	await prisma?.userKnaji.createMany({data: createNewKanjiListForSingleUser, skipDuplicates: true});
};