export const AddKanjiListToSingleUser = async (user: any) => {

	const globalKanjiList = await prisma?.kanji.findMany();
	const createNewKanjiListForSingleUser = globalKanjiList?.map((data) => ({
		kanjiId: `${data.kanji}_${user?.id}`,
		kanji: data.kanji,
		kanji_level: data.kanji_level,
		kanji_meanings: data.kanji_meanings,
		kun_readings: data.kun_readings,
		on_readings: data.on_readings,
		userId: user?.id,
	}));

	if (!createNewKanjiListForSingleUser) return ;

	await prisma?.userKnaji.createMany({data: createNewKanjiListForSingleUser, skipDuplicates: true});
};