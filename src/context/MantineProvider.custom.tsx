import type {PropsWithChildren} from "react";
import type {ColorScheme} from "@mantine/core";
import {ColorSchemeProvider, MantineProvider} from "@mantine/core";
import {useHotkeys, useLocalStorage} from "@mantine/hooks";

const MantineProviderCustom = ({children}: PropsWithChildren) => {

	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: "mantine-color-scheme",
		defaultValue: "light",
		getInitialValueInEffect: true,
	});

	const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

	useHotkeys([["mod+J", () => toggleColorScheme()]]);

	return (
			<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
				<MantineProvider theme={{colorScheme}} withGlobalStyles withNormalizeCSS>
					{children}
				</MantineProvider>
			</ColorSchemeProvider>
	);
};

export default MantineProviderCustom;
