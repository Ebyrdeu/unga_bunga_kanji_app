import type {PropsWithChildren} from "react";
import {useState} from "react";
import {AppShell, useMantineTheme} from "@mantine/core";
import HeaderCustom from "@/components/layout/header";
import NavbarCustom from "@/components/layout/navbar";
import {useSession} from "next-auth/react";

const Layout = ({children}: PropsWithChildren) => {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState<boolean>(false);
	const {data} = useSession();

	if (!data) return <>{children}</>;

	return (
			<AppShell
					styles={{main: {background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]}}}
					navbarOffsetBreakpoint="sm"
					navbar={<NavbarCustom opened={opened}/>}
					header={<HeaderCustom opened={opened} setOpened={setOpened}/>}
			>
				{children}
			</AppShell>
	);
};

export default Layout;