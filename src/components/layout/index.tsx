import {type NextPage} from "next";
import {type LayoutPropsTypes} from "@type/layout";
import {useState} from "react";
import {AppShell} from "@mantine/core";
import NavbarCustom from "./_navbar.custom";
import HeaderCustom from "@components/layout/_header.custom";
import {useLayoutStyles} from "./styles/useLayout.styles";

const Layout: NextPage<LayoutPropsTypes> = ({children}) => {
	const [opened, setOpened] = useState<boolean>(false);
	const {classes} = useLayoutStyles(undefined, undefined);
	return (
			<AppShell
					className={classes.appShell}
					navbarOffsetBreakpoint="sm"
					asideOffsetBreakpoint="sm"
					navbar={<NavbarCustom opened={opened}/>}
					header={<HeaderCustom setOpened={setOpened} opened={opened}/>}
			>
				{children}
			</AppShell>
	);
};

export default Layout;
