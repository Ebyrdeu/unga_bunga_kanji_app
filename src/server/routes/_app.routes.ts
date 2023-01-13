import {merge} from "@/src/server";
import {greetings} from "@/server/routes/greetings";
import {user} from "@/server/routes/user";
import {kanji} from "@/server/routes/kanji";

export const appRouter = merge(greetings, user, kanji);
// export type definition of API
export type AppRouter = typeof appRouter;