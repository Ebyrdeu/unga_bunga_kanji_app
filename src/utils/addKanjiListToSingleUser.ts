export const AddKanjiListToSingleUser = async (session: any) => {
	if (!session) return null;

	const globalKanjiList = await prisma?.kanji.findMany();
	const createNewKanjiListForSingleUser = globalKanjiList?.map((data) => ({
		kanjiId: `${data.kanji}_${session.user?.id}`,
		kanji: data.kanji,
		kanji_level: data.kanji_level,
		kanji_meanings: data.kanji_meanings,
		kun_readings: data.kun_readings,
		on_readings: data.on_readings,
		userId: session.user?.id,
	}));

	if (!createNewKanjiListForSingleUser) return null;

	await prisma?.userKnaji.createMany({data: createNewKanjiListForSingleUser, skipDuplicates: true});
};