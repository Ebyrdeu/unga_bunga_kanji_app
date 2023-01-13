import {prisma, procedure, router} from "@/src/server";
import {z} from "zod";

export const kanji = router({
	kanji_all: procedure.query(() => prisma?.kanji.findMany()),

	kanji_add: procedure.input(
			z.object({
				kanji: z.string(),
				kanji_level: z.number(),
				kanji_meanings: z.array(z.string()),
				kun_readings: z.array(z.string()),
				on_readings: z.array(z.string()),
			}),
	).mutation(({input}) => {
		return prisma?.kanji.create({
			data: {
				kanji: input.kanji,
				kanji_level: input.kanji_level,
				kanji_meanings: input.kanji_meanings,
				kun_readings: input.kun_readings,
				on_readings: input.on_readings,
			},
		});
	}),

	kanji_delete: procedure.input(
			z.object({
				kanji: z.string(),
			}),
	).mutation(({input}) => prisma.kanji.delete({where: {kanji: input.kanji}})),

	kanji_update: procedure.input(
			z.object({
				kanji: z.string(),
				kanji_level: z.number(),
				kanji_meanings: z.array(z.string()),
				kun_readings: z.array(z.string()),
				on_readings: z.array(z.string()),
			})
	).mutation(({input}) => prisma.kanji.update({
		where: {
			kanji: input.kanji
		},
		data: {
			kanji: input.kanji,
			kanji_level: input.kanji_level,
			kanji_meanings: input.kanji_meanings,
			kun_readings: input.kun_readings,
			on_readings: input.on_readings,
		}
	}))
});