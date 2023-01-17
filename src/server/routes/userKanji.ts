import {prisma, procedure, router} from "@/src/server";
import {z} from "zod";

export const userKanji = router({
	userKanji_all: procedure.query(() => prisma?.userKnaji.findMany()),
	userKanji_single: procedure
	.input(z.object({kanjiId: z.string()}))
	.query(({input}) => prisma?.userKnaji.findUnique({
		where: {kanjiId: input.kanjiId}
	})),
	userKanji_update: procedure.input(
			z.object({
				kanji: z.string(),
				total_answers: z.number(),
				correct_answers: z.number(),
			}),
	).mutation(({input}) => prisma.userKnaji.update({
		where: {
			kanjiId: input.kanji,
		},
		data: {
			total_answers: input.total_answers,
			correct_answers: input.correct_answers,
		},
	})),
});