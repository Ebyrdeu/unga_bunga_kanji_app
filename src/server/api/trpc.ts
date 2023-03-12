import {type CreateNextContextOptions} from "@trpc/server/adapters/next";
import {type Session} from "next-auth";
import {initTRPC, TRPCError} from "@trpc/server";
import superjson from "superjson";
import {prisma} from "@server/db";
import {getServerAuthSession} from "@server/auth";

type CreateContextOptions = {
  session: Session | null;
};

/**
 * This helper generates the "internals" for a tRPC context. If you need to use it, you can export
 * it from here.
 *
 * Examples of things you may need it for:
 * - testing, so we don't have to mock Next.js' req/res
 * - tRPC's `createSSGHelpers`, where we don't have req/res
 *
 * @see https://create.t3.gg/en/usage/trpc#-servertrpccontextts
 */
const createInnerTRPCContext = (opts: CreateContextOptions) => {
  return {
    session: opts.session,
    prisma,
  };
};

/**
 * This is the actual context you will use in your router. It will be used to process every request
 * that goes through your tRPC endpoint.
 *
 * @see https://trpc.io/docs/context
 */
export const createTRPCContext = async (opts: CreateNextContextOptions) => {
  const {req, res} = opts;

  // Get the session from the server using the getServerSession wrapper function
  const session = await getServerAuthSession({req, res});

  return createInnerTRPCContext({
    session,
  });
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({shape}) {
    return shape;
  },
});

export const createTRPCRouter = t.router;
export const mergeRouters = t.mergeRouters;

export const publicProcedure = t.procedure;

/** Reusable middleware that enforces users are logged in before running the procedure. */
const enforceUserIsAuthed = t.middleware(({ctx, next}) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({code: "UNAUTHORIZED"});
  }
  return next({
    ctx: {
      // infers the `session` as non-nullable
      session: {...ctx.session, user: ctx.session.user},
    },
  });
});

export const protectedProcedure = t.procedure.use(enforceUserIsAuthed);
