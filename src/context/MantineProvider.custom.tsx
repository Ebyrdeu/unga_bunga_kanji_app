import {Layout} from '@components/layout';
import {type ColorScheme, ColorSchemeProvider, MantineProvider} from '@mantine/core';
import {useHotkeys, useLocalStorage} from '@mantine/hooks';
import {type SpotlightAction, SpotlightProvider} from '@mantine/spotlight';
import {api} from '@utils/api';
import {type NextPage} from 'next';
import {useSession} from 'next-auth/react';
import {useRouter} from 'next/router';
import {type PropsWithChildren, useEffect} from 'react';

const MantineProviderCustom: NextPage<PropsWithChildren> = ({children}) => {
  const {data: sessionData} = useSession();
  const {push} = useRouter();
  const utils = api.useContext();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'color-scheme', defaultValue: 'dark', getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(
      value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  const {data} = api.kanji.getAll.useQuery(undefined, {enabled: sessionData?.user !== undefined});
  const {mutate: kanji} = api.user.createAllKanjiByUserLevel.useMutation({
    onSuccess: () => utils.user.getUserKanji.invalidate(),
  });

  useEffect(() => {
    if (!data) return;
    kanji({data});
  }, [data, kanji]);

  const actions: SpotlightAction[] | undefined = data?.map(({kanji, meanings}) => ({
    title: kanji, description: meanings.join(', '), onTrigger: () => push(`/kanji/${kanji}`),
  }));




  return (<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
    <MantineProvider theme={{colorScheme}} withGlobalStyles withNormalizeCSS>
      <SpotlightProvider limit={5} overlayBlur={5} shortcut={['mod + P', 'mod + K', '/']}
                         actions={!actions ? [] : actions}>
        <Layout>
          {children}
        </Layout>
      </SpotlightProvider>
    </MantineProvider>
  </ColorSchemeProvider>);
};

export default MantineProviderCustom;