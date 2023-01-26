import  { type AppProps} from "next/app";
import MantineProviderCustom from "@context/MantineProvider.custom";
import Head from "next/head";

export default function App({Component, pageProps}: AppProps) {
	return  (
		<>
			<Head>
				<title>Page title</title>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			</Head>

			<MantineProviderCustom>
				<Component {...pageProps} />
			</MantineProviderCustom>
		</>
	)
}
