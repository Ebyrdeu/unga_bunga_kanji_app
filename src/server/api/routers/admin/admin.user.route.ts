import {createTRPCRouter, protectedProcedure} from "@server/api/trpc";
import {prisma} from "@server/db";
import {z} from "zod";

export const adminUserRoute = createTRPCRouter({

  getAllUsers: protectedProcedure.query(async () => prisma.user.findMany()),

  deleteUser: protectedProcedure.input(z.object({
    id: z.string(),
  })).mutation(async ({input}) => prisma.user.delete({
    where: {
      id: input.id,
    },
    include: {
      kanji: true,
    },
  })),

  updateUserRank: protectedProcedure.input(z.object({
    id: z.string(),
    role: z.enum(["PEASANT", "ADMIN"]),
  })).mutation(async ({input}) => prisma.user.update({
    where: {
      id: input.id,
    },
    data: {
      role: input.role,
    },
  })),

});
