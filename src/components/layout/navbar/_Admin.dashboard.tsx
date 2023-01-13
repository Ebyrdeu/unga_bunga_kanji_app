import {Navbar, ScrollArea} from "@mantine/core";
import NestedLinks from "@/components/layout/navbar/_Nested.Links";
import {ADMIN_SETTINGS} from "@/@constants";

const AdminDashboard = () => {
	return (
			<Navbar.Section grow component={ScrollArea}>
				<NestedLinks {...ADMIN_SETTINGS} />
			</Navbar.Section>
	);
};

export default AdminDashboard;