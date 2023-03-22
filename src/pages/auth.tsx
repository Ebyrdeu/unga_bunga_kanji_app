import {SocialButtons} from '@components/auth';
import {Box, Center, Text, Title} from '@mantine/core';
import {type NextPage} from 'next';
import {getSession, type GetSessionParams} from 'next-auth/react';

const Auth: NextPage = () => {

  return (
      <Center style={{width: '100%', height: '100%'}}>
        <div>
          <Box mb={'sm'}>
            <Title mb={'xs'} order={2} align={'center'} weight={500}>Welcome to Unga Bunga Authentication</Title>
            <Text align={'center'} size="sm" color={'dimmed'}>Yeah, no google auth for you</Text>
          </Box>
          <SocialButtons/>
        </div>
      </Center>
  );
};

export async function getServerSideProps(context: GetSessionParams) {

  const session = await getSession(context);

  if (session?.user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {session},
  };
}

export default Auth;
