import {createTRPCRouter, publicProcedure} from '@server/api/trpc';
import {prisma} from '@server/db';
import {z} from 'zod';

export const kanjiRoute = createTRPCRouter({

  getAll: publicProcedure.query(async () => prisma.kanji.findMany()),

  getByKanji: publicProcedure.input(z.object({kanji: z.string().or(z.undefined())})).
      query(async ({input}) => prisma.kanji.findUnique({
        where: {
          kanji: input.kanji,
        },
      })),
});
