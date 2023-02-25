import {type GetServerSidePropsContext} from "next";
import {getServerSession, type NextAuthOptions} from "next-auth";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import {prisma} from "@server/db";

import DiscordProvider from "next-auth/providers/discord";
import GitHubProvider from "next-auth/providers/github";
import RedditProvider from "next-auth/providers/reddit";

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    }),
    RedditProvider({
      clientId: process.env.REDDIT_CLIENT_ID,
      clientSecret: process.env.REDDIT_CLIENT_SECRET,
      authorization: {
        params: {
          duration: "permanent",
        },
      },
    }),
  ],

  pages: {
    signIn: "/auth",
    newUser: "/auth",
  },
  callbacks: {
    session({session, token}) {
      if (token && session.user) {
        session.user.role = token.role;
        session.user.id = token.id;
        session.user.userLevel = token.userLevel;
      }
      return session;
    },
    jwt({token, user}) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.userLevel = user.userLevel;
      }
      return token;
    },
    async redirect({baseUrl}) {
      return baseUrl;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
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
