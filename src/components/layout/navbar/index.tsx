import {Navbar, ScrollArea} from "@mantine/core";
import type {NavbarProps} from "@/@types";
import UserButton from "@/components/layout/navbar/_User.button";
import useUser from "@/hooks/useUser";
import NestedLinks from "@/components/layout/navbar/_Nested.Links";
import Links from "@/components/layout/navbar/_Links";
import {ADMIN_SETTINGS} from "@/@constants";
import {IconCampfire, IconEyeTable, IconQuestionCircle} from "@tabler/icons";

const NavbarCustom = ({opened}: NavbarProps) => {
	const user = useUser();

	if (!user) return null;

	return (
			<Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{sm: 300, lg: 300}}>
				<Navbar.Section grow component={ScrollArea}>
					<Links icon={IconCampfire} label={"Home"} color={"red"} link={"/"}/>
					<Links icon={IconEyeTable} label={"Kanji List"} color={"green"} link={"/kanji"}/>
					<Links icon={IconQuestionCircle} label={"FAQ"} color={"violet"} link={"/faq"}/>
					{user.role !== "peasant" ? <NestedLinks {...ADMIN_SETTINGS} /> : null}
				</Navbar.Section>
				<UserButton/>
			</Navbar>
	);
};

export default NavbarCustom;