import {useUser} from '@/hooks';
import {CustomLoader} from '@components/loader';
import ProfileCard from '@components/profile/_profile.card';
import {getSession, type GetSessionParams} from 'next-auth/react';

const Profile = () => {
  const {user, userLoading} = useUser();

  if (!user || userLoading) return <CustomLoader/>;

  return <ProfileCard user={user}/>;
};

export default Profile;

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

