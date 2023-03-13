import {createTRPCRouter, protectedProcedure} from "@server/api/trpc";
import {prisma} from "@server/db";
import {z} from "zod";

export const adminKanjiRoute = createTRPCRouter({

  deleteKanji: protectedProcedure.input(z.object({
    id: z.string(),
  })).mutation(async ({input}) => prisma.kanji.delete({
    where: {
      id: input.id,
    },

  })),

  addKanji: protectedProcedure.input(z.object({
    kanji: z.string(),
    level: z.number(),
    meanings: z.array(z.string()),
    kun_readings: z.array(z.string()),
    on_readings: z.array(z.string()),
  })).mutation(async ({input}) => prisma.kanji.create({
    data: {
      kanji: input.kanji,
      level: input.level,
      meanings: input.meanings,
      kun_readings: input.kun_readings,
      on_readings: input.on_readings,
    },
  })),
});
