import {type AppProps} from "next/app";
import MantineProviderCustom from "@context/MantineProvider.custom";
import Head from "next/head";
import {SessionProvider} from "next-auth/react";
import {api} from "@utils/api";


const  App = ({Component, pageProps}: AppProps)  =>{
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

        <SessionProvider>
          <MantineProviderCustom>
            <Component {...pageProps} />
          </MantineProviderCustom>
        </SessionProvider>
      </>
  );
}

export default api.withTRPC(App);
