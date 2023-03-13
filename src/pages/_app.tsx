import {type AppType} from "next/app";
import {type Session} from "next-auth";
import MantineProviderCustom from "@context/MantineProvider.custom";
import Head from "next/head";
import {SessionProvider} from "next-auth/react";
import {api} from "@utils/api";
import {notoSans} from "@utils/fonts";

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
        <main className={notoSans.className}>
          <SessionProvider session={session}>
            <MantineProviderCustom>
              <Component {...pageProps} />
            </MantineProviderCustom>
          </SessionProvider>
        </main>
      </>
  );
};

export default api.withTRPC(App);
