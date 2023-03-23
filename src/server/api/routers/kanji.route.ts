import {createTRPCRouter, publicProcedure} from '@server/api/trpc';
import {z} from 'zod';

export const kanjiRoute = createTRPCRouter({

  getAll: publicProcedure.query(async ({ctx}) => ctx.prisma.kanji.findMany()),

  getByKanji: publicProcedure.input(z.object({kanji: z.string().or(z.undefined())})).
      query(async ({input, ctx}) => ctx.prisma.kanji.findUnique({
        where: {
          kanji: input.kanji,
        },
      })),
});
