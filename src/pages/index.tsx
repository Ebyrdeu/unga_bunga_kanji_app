import {ActionIcon, Button, Group, Progress} from "@mantine/core";
import {getSession, GetSessionParams, signOut} from "next-auth/react";
import {useUser} from "@hooks/useUser";
import {STAGE_COLORS} from "@constant/colors";

export default function Home() {
  const {kanji} = useUser();

  const mappedKanji = kanji?.map((item) => {
    return (
        <div key={item.kanjiId} style={{width: 44}}>
          <ActionIcon mb={5} color={STAGE_COLORS[`stage_${item.srs_stage}`]} size={44} variant="light">
            {item.kanji.kanji}
          </ActionIcon>
          <Progress size={"sm"} striped animate color={STAGE_COLORS[`stage_${item.srs_stage}`]}
                    value={item.srs_stage * 20}/>
        </div>
    );
  });

  return (
      <div>
        <Group mb={"xl"}>
          {mappedKanji}
        </Group>
        <Button color={"orange"} onClick={() => signOut()} size={"xl"}>Logout</Button>
      </div>
  );
}

export async function getServerSideProps(context: GetSessionParams) {

  const session = await getSession(context);

  if (!session?.user) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {session},
  };
}