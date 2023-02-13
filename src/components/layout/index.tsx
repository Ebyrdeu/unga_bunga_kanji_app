import {type NextPage} from "next";
import {type LayoutPropsTypes} from "@type/layout";
import {AppShell} from "@mantine/core";
import {useLayoutStyles} from "./styles/useLayout.styles";
import {HeaderCustom} from "@components/layout/_header.custom";
import {NavbarCustom} from "@components/layout/_navbar.custom";
import {useBurgerStore} from "@store/store";

export const Layout: NextPage<LayoutPropsTypes> = ({children}) => {
    const {classes} = useLayoutStyles(undefined, undefined);
    const {concentrateMode} = useBurgerStore();

    return (
        <AppShell
            className={classes.appShell}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={concentrateMode ? undefined : <NavbarCustom/>}
            header={concentrateMode ? undefined : <HeaderCustom/>}
        >
            {children}
        </AppShell>
    );
};

