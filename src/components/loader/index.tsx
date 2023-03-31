import {Center, Loader} from '@mantine/core';

export const CustomLoader = () => {
  return (
      <Center style={{ width: '100%', height: '100%' }}>
        <Loader color={'blue'} size={'lg'}/>
      </Center>
  );
};

