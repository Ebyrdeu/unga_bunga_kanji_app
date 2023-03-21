import ProfileCard from '@components/profile/_profile.card';
import {useUser} from '@hooks/useUser';
import {Group} from '@mantine/core';
import {getSession, type GetSessionParams} from 'next-auth/react';

const Profile = () => {
  const {user} = useUser();

  if (!user) return null;

  return (
      <Group position={'center'}>
          <ProfileCard user={user}/>
      </Group>
  );
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

