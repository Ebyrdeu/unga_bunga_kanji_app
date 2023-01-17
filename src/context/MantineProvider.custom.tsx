import type {PropsWithChildren} from "react";
import type {ColorScheme} from "@mantine/core";
import type {SpotlightAction} from "@mantine/spotlight";
import {ColorSchemeProvider, MantineProvider} from "@mantine/core";
import {SpotlightProvider} from "@mantine/spotlight";
import {useHotkeys, useLocalStorage} from "@mantine/hooks";
import {IconSearch} from "@tabler/icons";
import {trpc} from "@/src/utils";
import {useRouter} from "next/router";

const MantineProviderCustom = ({children}: PropsWithChildren) => {

	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: "mantine-color-scheme",
		defaultValue: "light",
		getInitialValueInEffect: true,
	});

	const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
	useHotkeys([["mod+J", () => toggleColorScheme()]]);
	const {data} = trpc.userKanji_all.useQuery();
	const {push} = useRouter();
	if (!data) return null;

	const actions: SpotlightAction[] = data?.map(({kanji, kanji_meanings}) => {
		const meanings = kanji_meanings.map(item => `${item}, `);
		return {
			title: kanji,
			description: `${meanings}\n`,
			onTrigger: () => push(`kanji/${kanji}`),
		};
	});

	return (
			<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
				<MantineProvider theme={{colorScheme}} withGlobalStyles withNormalizeCSS>
					<SpotlightProvider
							highlightQuery
							overlayBlur={5}
							actions={actions}
							searchIcon={<IconSearch size={18}/>}
							searchPlaceholder="Search..."
							shortcut={["mod + P", "mod + K", "/"]}
							nothingFoundMessage="Nothing found..."
					>
						{children}
					</SpotlightProvider>
				</MantineProvider>
			</ColorSchemeProvider>
	);
};

export default MantineProviderCustom;
