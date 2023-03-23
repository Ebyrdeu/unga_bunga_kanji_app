import {KanjiList} from '@components/main/_kanji.list';
import {useUser} from '@hooks/useUser';
import {type NextPage} from 'next';
import {getSession, type GetSessionParams} from 'next-auth/react';

const Home: NextPage = () => {
  const {kanji, user} = useUser();

  if (!user || !kanji) return null;
  return (
      <div>
        <KanjiList kanji={kanji} user={user}/>
      </div>
  );
};

export async function getServerSideProps(context: GetSessionParams) {

  const session = await getSession(context);

  if (!session?.user) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: {session},
  };
}

export default Home;

