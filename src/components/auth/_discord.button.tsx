import {Button, type ButtonProps} from "@mantine/core";
import {IconBrandDiscord} from "@tabler/icons";
import {type NextPage} from "next";
import {signIn} from "next-auth/react";

export const DiscordButton: NextPage<ButtonProps> = (props) => {
  return (
      <Button
          onClick={() => void signIn("discord")}
          leftIcon={<IconBrandDiscord stroke={2} size={16}/>}
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