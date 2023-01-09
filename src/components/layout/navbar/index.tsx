import {Navbar, Text} from "@mantine/core";
import {NavbarProps} from "@/@types";
import UserButton from "@/components/layout/navbar/_UserButton";


const NavbarCustom = ({opened}: NavbarProps) => {
	return (
			<Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{sm: 300, lg: 300}}>

				<Navbar.Section>
					<Text>Application w</Text>
				</Navbar.Section>
				<UserButton/>
			</Navbar>
	);
};

export default NavbarCustom;