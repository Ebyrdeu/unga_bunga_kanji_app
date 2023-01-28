import {type NextPage} from "next";
import {type LayoutPropsTypes} from "@type/layout.type";
import {AppShell} from "@mantine/core";
import {useLayoutStyles} from "./styles/useLayout.styles";
import {HeaderCustom} from "@components/layout/_header.custom";
import {NavbarCustom} from "@components/layout/_navbar.custom";

export const Layout: NextPage<LayoutPropsTypes> = ({children}) => {
	const {classes} = useLayoutStyles(undefined, undefined);

	return (
			<AppShell
					className={classes.appShell}
					navbarOffsetBreakpoint="sm"
					asideOffsetBreakpoint="sm"
					navbar={<NavbarCustom/>}
					header={<HeaderCustom/>}
			>
				{children}
			</AppShell>
	);
};

