import {useUser} from "@hooks/useUser";
import {SRS} from "@components/utils/SRS";
import {type KanjiOnUsers} from "@prisma/client";
import {api} from "@utils/api";
import {getSession, type GetSessionParams} from "next-auth/react";
import {KanjiList} from "@components/main/_kanji.list";

export default function Home() {
  const {kanji, user} = useUser();
  const {mutate} = api.srs.updateSRS.useMutation();

  if (!user && !kanji) return null;
  if (kanji === undefined) return null;

  const onCorrect = (item: KanjiOnUsers) => {
    const data = SRS(item, item.srs_stage);
    if (!data) return;
    return mutate({data: {id: item.kanjiId, srs_stage: data.srs_stage + 1, updatedAt: data.updatedAt}});
  };

  return (
      <div>
        <KanjiList kanji={kanji}/>
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



