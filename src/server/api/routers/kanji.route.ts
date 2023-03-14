import {createTRPCRouter, publicProcedure} from "@server/api/trpc";
import {prisma} from "@server/db";

export const kanjiRoute = createTRPCRouter({

  getAll: publicProcedure.query(async () => prisma.kanji.findMany()),

});
