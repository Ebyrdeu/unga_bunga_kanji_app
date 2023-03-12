import {UserTable} from "@components/admin/_user.table";
import {api} from "@utils/api";
import {getSession, type GetSessionParams} from "next-auth/react";

const Kanji = () => {
  const {data, isLoading} = api.admin.getAllUsers.useQuery();
  if (!data && isLoading) return null;

  return (
      <div>
        <UserTable data={data}/>
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