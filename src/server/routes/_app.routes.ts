import {merge} from "@/src/server";
import {greetings} from "@/server/routes/greetings";

export const appRouter = merge(greetings);
// export type definition of API
export type AppRouter = typeof appRouter;