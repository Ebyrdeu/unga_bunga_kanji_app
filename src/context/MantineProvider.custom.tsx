import {type ColorScheme, ColorSchemeProvider, MantineProvider} from "@mantine/core";
import {useHotkeys, useLocalStorage} from "@mantine/hooks";
import {type PropsWithChildren} from "react";
import {SpotlightProvider} from "@mantine/spotlight";
import {Layout} from "@components/layout";
import {type NextPage} from "next";

const MantineProviderCustom: NextPage<PropsWithChildren> = ({children}) => {
	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: "color-scheme",
		defaultValue: "dark",
		getInitialValueInEffect: true,
	});

	const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

	useHotkeys([["mod+J", () => toggleColorScheme()]]);

	return (
			<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
				<MantineProvider theme={{colorScheme,}} withGlobalStyles withNormalizeCSS>
					<SpotlightProvider limit={10} overlayBlur={5} shortcut={['mod + P', 'mod + K', '/']} actions={[]}>
					<Layout>
						{children}
					</Layout>
					</SpotlightProvider>
				</MantineProvider>
			</ColorSchemeProvider>
	);
};

export default MantineProviderCustom;