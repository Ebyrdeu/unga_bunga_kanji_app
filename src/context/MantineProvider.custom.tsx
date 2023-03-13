import {type ColorScheme, ColorSchemeProvider, MantineProvider} from "@mantine/core";
import {useHotkeys, useLocalStorage} from "@mantine/hooks";
import {type PropsWithChildren, useEffect} from "react";
import {SpotlightProvider} from "@mantine/spotlight";
import {Layout} from "@components/layout";
import {type NextPage} from "next";
import {api} from "@utils/api";
import {useSession} from "next-auth/react";

const MantineProviderCustom: NextPage<PropsWithChildren> = ({children}) => {
  const {data: sessionData} = useSession();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "color-scheme",
    defaultValue: "dark",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(
      value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  const {data} = api.kanji.getAll.useQuery(undefined, {enabled: sessionData?.user !== undefined});
  const {mutate} = api.user.createAllKanjiByUserLevel.useMutation();

  useEffect(() => {
    if (!data) return;
    mutate({data});
  }, [data, mutate]);

  return (
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{colorScheme}} withGlobalStyles withNormalizeCSS>
          <SpotlightProvider limit={10} overlayBlur={5} shortcut={["mod + P", "mod + K", "/"]} actions={[]}>
            <Layout>
              {children}
            </Layout>
          </SpotlightProvider>
        </MantineProvider>
      </ColorSchemeProvider>
  );
};

export default MantineProviderCustom;