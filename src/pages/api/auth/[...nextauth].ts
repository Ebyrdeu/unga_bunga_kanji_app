import NextAuth from "next-auth";
import {prisma} from "@/src/server";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import DiscordProvider from "next-auth/providers/discord";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		DiscordProvider({
			clientId: process.env.DISCORD_CLIENT_ID!,
			clientSecret: process.env.DISCORD_CLIENT_SECRET!,
		}),
		GithubProvider({
			clientId: process.env.GITHUB_ID!,
			clientSecret: process.env.GITHUB_SECRET!,
		}),
	],
	callbacks: {
		async session({session, user}: any) {
			session.user.id = user.id;
			session.user.role = user.role;
			return session;
		},
	},
	pages: {
		signIn: "/auth",
	},
};
export default NextAuth(authOptions);