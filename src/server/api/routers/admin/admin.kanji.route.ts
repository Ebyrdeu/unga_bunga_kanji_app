import {createTRPCRouter, protectedProcedure} from '@server/api/trpc';
import {z} from 'zod';

export const adminKanjiRoute = createTRPCRouter({

  deleteKanji: protectedProcedure.input(z.object({
    kanji: z.string(),
  })).mutation(async ({input, ctx}) => ctx.prisma.kanji.delete({
    where: {
      kanji: input.kanji,
    },

  })),

  addKanji: protectedProcedure.input(z.object({
    kanji: z.string(),
    level: z.number(),
    meanings: z.array(z.string()),
    kun_readings: z.array(z.string()),
    on_readings: z.array(z.string()),
  })).mutation(async ({input, ctx}) => ctx.prisma.kanji.create({
    data: {
      kanji: input.kanji,
      level: input.level,
      meanings: input.meanings,
      kun_readings: input.kun_readings,
      on_readings: input.on_readings,
    },
  })),
});
