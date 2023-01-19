import  type {DefaultSession} from "next-auth";

declare module "next-auth" {
	interface Session {
		user: {
			id: string
			role: "admin" | "peasant"
		} & DefaultSession["user"];
	}
}