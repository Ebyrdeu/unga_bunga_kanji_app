import {CustomLoader} from '@components/loader';
import {KanjiList} from '@components/main/_kanji.list';
import {ProgressBlock} from '@components/main/_progress.block';
import {useUser} from '@hooks/useUser';
import {type NextPage} from 'next';
import {getSession, type GetSessionParams} from 'next-auth/react';



const Home: NextPage = () => {
  const {kanji, user, kanjiLoading, userLoading} = useUser();

  if (!user || !kanji || kanjiLoading || userLoading) return <CustomLoader/>;
  return (

        <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
        <KanjiList kanji={kanji} user={user}/>
        <ProgressBlock kanji={kanji}/>
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

