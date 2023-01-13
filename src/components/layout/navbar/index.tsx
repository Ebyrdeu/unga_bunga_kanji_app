import {Navbar} from "@mantine/core";
import type {NavbarProps} from "@/@types";
import UserButton from "@/components/layout/navbar/_User.button";
import AdminDashboard from "@/components/layout/navbar/_Admin.dashboard";
import useUser from "@/hooks/useUser";

const NavbarCustom = ({opened}: NavbarProps) => {
	const {role} = useUser();

	return (
			<Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{sm: 300, lg: 300}}>
				{role !== "peasant" ? <AdminDashboard/> : null}
				<UserButton/>
			</Navbar>
	);
};

export default NavbarCustom;