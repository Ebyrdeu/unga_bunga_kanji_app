import MantineProviderCustom from '@context/MantineProvider.custom';
import {api} from '@utils/api';
import {type Session} from 'next-auth';
import {SessionProvider} from 'next-auth/react';
import {type AppType} from 'next/app';
import Head from 'next/head';

const App: AppType<{ session: Session | null }> = ({Component, pageProps: {session, ...pageProps}}) => {
  return (
      <>
        <Head>
          <title>ウンガ・ブンガ</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
          <meta
              name="description"
              content="Unga Bunga Kanji App let's you learn and review Kanji"
              key="desc"
          />
        </Head>
        <SessionProvider session={session}>
          <MantineProviderCustom>
            <Component {...pageProps} />
          </MantineProviderCustom>
        </SessionProvider>
      </>
  );
};

export default api.withTRPC(App);
