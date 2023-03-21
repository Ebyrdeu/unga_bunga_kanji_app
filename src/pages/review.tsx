import {getSession, type GetSessionParams} from 'next-auth/react';

const Review = () => {
  return (
      <div>

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