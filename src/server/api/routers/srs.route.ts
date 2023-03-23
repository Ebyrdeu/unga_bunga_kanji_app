import {createTRPCRouter, protectedProcedure} from '@server/api/trpc';
import {z} from 'zod';

export const srsRoute = createTRPCRouter({

  updateSRS: protectedProcedure.input(z.object({
    data: z.object({
      id: z.string(),
      updatedAt: z.date(),
      srs_stage: z.number(),
    }),
  })).mutation(async ({input, ctx}) => ctx.prisma.kanjiOnUsers.update({
    where: {
      kanjiId_userId: {
        kanjiId: input.data.id,
        userId: ctx.session.user.id,
      },
    },
    data: {
      srs_stage: input.data.srs_stage,
      updatedAt: input.data.updatedAt,
    },
  })),

});



