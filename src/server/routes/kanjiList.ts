import {procedure, router} from "@/src/server";
import {AddKanjiListToSingleUser} from "@/src/utils";
import {z} from "zod";

export const kanjiList = router({
	kanjiList_create: procedure.input(
			z.object({
				data: z.object({
					curentlevel: z.number().optional(),
					email: z.string().optional(),
					image:  z.string().optional(),
					name:  z.string().optional(),
					role:  z.string().optional(),
					id:  z.string(),
					isLoading: z.boolean().optional()
				})
			}),
	).mutation(({input}) => AddKanjiListToSingleUser(input.data)),
});