import {prisma, procedure, router} from "@/src/server";
import {z} from "zod";

export const user = router({
	// all
	users: procedure.query(() => prisma.user.findMany()),
	// single
	user: procedure.input(z.object({
		id: z.string(),
	})).query(({input}) => prisma.user.findUnique({where: {id: input.id}})),
	// delete single
	delete_user: procedure.input(
			z.object({
				id: z.string(),
			})).mutation(({input}) => prisma.user.delete({where: {id: input.id}})),

	user_level_up: procedure.input(
			z.object({
				id: z.string(),
				currentLevel: z.number()
			})).mutation(({input}) => prisma.user.update({where: {id: input.id}, data: {curentlevel: input.currentLevel}})),
	// rank up/down single
	user_rank: procedure.input(
			z.object({
				id: z.string(),
				role: z.union([z.literal("admin"), z.literal("peasant")]),
			}),
	).mutation(({input}) => prisma.user.update({
		where: {id: input.id},
		data: {
			role: input.role,
		},
	})),
});