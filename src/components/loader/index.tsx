import {Center, Loader} from '@mantine/core';
import {type FC} from 'react';

export const CustomLoader: FC = () => {
  return (
      <Center style={{width: '100%', height: '100%'}}>
        <Loader color={'blue'} size={'lg'}/>
      </Center>
  );
};

