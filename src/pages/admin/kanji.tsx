import {api} from "@utils/api";
import {KanjiTable} from "@components/admin/_kanji.table";
import {getSession, type GetSessionParams} from "next-auth/react";

const Kanji = () => {
  const {data, isLoading} = api.kanji.getAll.useQuery();

  if (!data && isLoading) return null;

  return (
      <div>
        <KanjiTable data={data}/>
      </div>
  );
};

export default Kanji;

export async function getServerSideProps(context: GetSessionParams) {

  const session = await getSession(context);

  if (session?.user?.role !== "ADMIN") {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: {session},
  };
}