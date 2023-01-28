import {Button, type ButtonProps} from "@mantine/core";
import {IconBrandDiscord} from "@tabler/icons";
import {type NextPage} from "next";

export const DiscordButton: NextPage<ButtonProps> = (props ) => {
	return (
			<Button
					leftIcon={<IconBrandDiscord size={16}/>}
					sx={(theme) => ({
						backgroundColor: theme.colorScheme === "dark" ? "#5865F2" : "#5865F2",
						"&:hover": {
							backgroundColor:
									theme.colorScheme === "dark"
											? theme.fn.lighten("#5865F2", 0.05)
											: theme.fn.darken("#5865F2", 0.05),
						},
					})}
					{...props}
			/>
	);
};