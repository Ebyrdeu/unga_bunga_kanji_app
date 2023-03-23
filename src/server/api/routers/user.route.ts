import {createTRPCRouter, protectedProcedure} from '@server/api/trpc';
import {z} from 'zod';

export const userRoute = createTRPCRouter({
  getById: protectedProcedure.query(async ({ctx}) => ctx.prisma.user.findUnique({
    where: {
      id: ctx.session.user.id,
    },
  })),

  getUserKanji: protectedProcedure.query(async ({ctx}) => ctx.prisma.kanjiOnUsers.findMany({
    where: {
      userId: ctx.session.user.id,
    },
    include: {
      kanji: true,
    },
  })),

  createAllKanjiByUserLevel: protectedProcedure.input(z.object({
    data: z.array(z.object({
      id: z.string(),
      kanji: z.string(),
      level: z.number(),
      meanings: z.array(z.string()),
      on_readings: z.array(z.string()),
      kun_readings: z.array(z.string()),
      createdAt: z.date(),
      updatedAt: z.date(),
    })),
  })).mutation(async ({input, ctx}) => ctx.prisma.kanjiOnUsers.createMany({
    skipDuplicates: true,
    data: input.data.filter(k => k.level === ctx.session.user.userLevel).map(k => ({
      kanjiId: k.id,
      userId: ctx.session.user.id,
    })),
  })),

  updateUserById: protectedProcedure.input(z.object({
    email: z.string().email().nullable(),
    name: z.string().min(3).nullable(),
    image: z.string().nullable(),
  })).mutation(async ({input, ctx}) => ctx.prisma.user.update({
    where: {
      id: ctx.session.user.id,
    },
    data: {
      email: input.email,
      name: input.name,
      image: input.image,
    },
  })),

  levelUpUser: protectedProcedure.mutation(async ({ctx}) => ctx.prisma.user.update({
    where: {
      id: ctx.session.user.id,
    },
    data: {
      userLevel: ctx.session.user.userLevel + 1,
    },
  })),

});
