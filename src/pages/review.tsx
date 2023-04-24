import {useUser} from '@/hooks';
import {CustomLoader} from '@components/loader';
import {KanjiGame} from '@components/review';
import {getSession, type GetSessionParams} from 'next-auth/react';

const Review = () => {
  const {kanji, kanjiLoading} = useUser();

  if (!kanji || kanjiLoading) return <CustomLoader/>;

  const data = kanji.filter(k => k.srs_stage > 0 && k.srs_stage < 7 && k.updatedAt <= new Date());

  return <KanjiGame data={data}/>;

};

export default Review;

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