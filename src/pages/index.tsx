import Layout from "@/components/layout";
import {trpc} from "@/src/utils";
import Authentication from "@/src/pages/Authentication";

export default function Home() {
	const {data} = trpc.hello.useQuery({text: "client"});
	if (!data) {
		return <div>Loading...</div>;
	}
	return (
			<>

				<Layout>
					<Authentication/>
				</Layout>
			</>
	);
}
