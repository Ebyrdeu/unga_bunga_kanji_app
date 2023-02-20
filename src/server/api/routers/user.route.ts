import {createTRPCRouter, protectedProcedure} from "@server/api/trpc";
import {prisma} from "@server/db";

export const userRoute = createTRPCRouter({
  get: protectedProcedure.query(async ({ctx}) => prisma.user.findUnique({
    where: {
      id: ctx.session.user.id,
    },
  })),
});
