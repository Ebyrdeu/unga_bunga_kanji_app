import {LessonList} from '@components/lesson/_lesson.list';
import {CustomLoader} from '@components/loader';
import {useUser} from '@hooks/useUser';
import {getSession, type GetSessionParams} from 'next-auth/react';

const Lesson = () => {
  const {kanji, kanjiLoading} = useUser();

  if (!kanji || kanjiLoading) return <CustomLoader/>

  const data = kanji.filter(k => k.srs_stage === 0);


  return (
      <div>
        <LessonList data={data}/>
      </div>
  );
};
export default Lesson;

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