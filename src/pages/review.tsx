import {KanjiGame} from '@components/review';
import {useUser} from '@hooks/useUser';
import {getSession, type GetSessionParams} from 'next-auth/react';

const Review = () => {
  const {kanji} = useUser();

  const data = kanji?.filter(k => k.srs_stage > 0 && k.srs_stage < 5 && k.updatedAt <= new Date());

  if (typeof data === 'undefined') return null;

  return (
      <div>
        <KanjiGame data={data}/>
      </div>
  );
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