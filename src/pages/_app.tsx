import type {AppProps} from "next/app";
import Head from "next/head";
import MantineProviderCustom from "@/context/MantineProvider.custom";
import {trpc} from "@/utils/_trpc";
import {SessionProvider} from "next-auth/react";
import Layout from "@/components/layout";

const App = ({Component, pageProps: { session, ...pageProps }}: AppProps) => {

	return (
			<>
				<Head>
					<title>Unga Bunga</title>
					<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
				</Head>
				<SessionProvider session={session}>
				<MantineProviderCustom>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</MantineProviderCustom>
				</SessionProvider>
			</>
	);
};
export default trpc.withTRPC(App);