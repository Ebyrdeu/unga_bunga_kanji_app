import {createTRPCRouter, mergeRouters} from "@server/api/trpc";
import {adminUserRoute} from "@server/api/routers/admin/admin.user.route";
import {adminKanjiRoute} from "@server/api/routers/admin/admin.kanji.route";
import {userRoute} from "@server/api/routers/user.route";
import {kanjiRoute} from "@server/api/routers/kanji.route";
import {srsRoute} from "@server/api/routers/srs.route";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRoute,
  admin: mergeRouters(adminUserRoute, adminKanjiRoute),
  kanji: kanjiRoute,
  srs: srsRoute,
});

// export type definition of API
export type AppRouter = typeof appRouter;
