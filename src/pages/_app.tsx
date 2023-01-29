import {type AppProps} from "next/app";
import MantineProviderCustom from "@context/MantineProvider.custom";
import Head from "next/head";
import {SessionProvider} from "next-auth/react";

export default function App({Component, pageProps}: AppProps) {
	return  (
		<>
			<Head>
				<title>ウンガ・ブンガ</title>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
			</Head>

			<SessionProvider>
				<MantineProviderCustom>
					<Component {...pageProps} />
				</MantineProviderCustom>
			</SessionProvider>
		</>
	)
}
