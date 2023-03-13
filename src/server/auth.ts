import {type GetServerSidePropsContext} from "next";
import {getServerSession, type NextAuthOptions} from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import GithubProvider from "next-auth/providers/github";
import RdditProvider from "next-auth/providers/reddit";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import {env} from "@/env.mjs";
import {prisma} from "@/server/db";

export const authOptions: NextAuthOptions = {
  callbacks: {
    session({session, user}) {
      if (session.user) {
        session.user.id = user.id;
        session.user.userLevel = user.userLevel;
        session.user.role = user.role;
      }
      return session;
    },

    redirect({baseUrl}) {
      return baseUrl;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    RdditProvider({
      clientId: env.REDDIT_CLIENT_ID,
      clientSecret: env.REDDIT_CLIENT_SECRET,
    }),
  ],
  pages: {
    newUser: "/",
    signIn: "/",
  },
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
