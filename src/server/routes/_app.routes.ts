import {merge} from "@/src/server";
import {user} from "@/server/routes/user";
import {kanji} from "@/server/routes/kanji";
import {userKanji} from "@/server/routes/userKanji";

export const appRouter = merge(user, kanji, userKanji);
// export type definition of API
export type AppRouter = typeof appRouter;