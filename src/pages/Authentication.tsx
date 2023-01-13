import {signOut} from "next-auth/react";
import {Button} from "@mantine/core";

const Authentication = () => {
	return (
			<>
				<Button onClick={() => signOut()}>Sign out</Button>
			</>
	);

};

export default Authentication;