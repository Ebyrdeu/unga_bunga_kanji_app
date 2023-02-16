import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import DiscordProvider from "next-auth/providers/discord";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import {prisma} from "@utils/prisma.client";

export default NextAuth({
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
});