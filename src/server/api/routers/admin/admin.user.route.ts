import {createTRPCRouter, protectedProcedure} from "@server/api/trpc";
import {prisma} from "@server/db";
import {z} from "zod";

export const adminUserRoute = createTRPCRouter({
  deleteUser: protectedProcedure.input(z.object({
    id: z.string(),
  })).mutation(({input}) => prisma.user.delete({
    where: {
      id: input.id,
    },
  })),

  updateUserRank: protectedProcedure.input(z.object({
    id: z.string(),
    role: z.enum(["PEASANT", "ADMIN"]),
  })).mutation(({input}) => prisma.user.update({
    where: {
      id: input.id,
    },
    data: {
      role: input.role,
    },
  })),

});
