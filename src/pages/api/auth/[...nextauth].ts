import NextAuth from "next-auth";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import DiscordProvider from "next-auth/providers/discord";
import GithubProvider from "next-auth/providers/github"
import {client} from "@/server/_prisma.db";

export default NextAuth({
	adapter: PrismaAdapter(client),
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
	pages: {
		signIn: '/auth/signin',
	},
});