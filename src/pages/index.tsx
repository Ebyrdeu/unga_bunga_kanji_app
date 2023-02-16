import {Button, Group} from "@mantine/core";
import {signOut} from "next-auth/react";

export default function Home() {
  return (
      <Group>
        <Button color={"orange"} onClick={() => signOut()} size={"xl"}>Logout</Button>
      </Group>
  );
}
