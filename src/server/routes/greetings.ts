import {procedure, router} from "@/src/server";
import {z} from "zod";

export const greetings = router({
	hello: procedure
	.input(
			z.object({
				text: z.string(),
			}),
	)
	.query(({ input }) => {
		return {
			greeting: `hello ${input.text}`,
		};
	}),
});