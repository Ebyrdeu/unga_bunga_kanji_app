import {useColorScheme} from '@/hooks';
import {Layout} from '@components/layout';
import {ColorSchemeProvider, MantineProvider} from '@mantine/core';
import {type SpotlightAction, SpotlightProvider} from '@mantine/spotlight';
import {api} from '@utils/api';
import {type NextPage} from 'next';
import {useSession} from 'next-auth/react';
import {useRouter} from 'next/router';
import {type PropsWithChildren} from 'react';

const MantineProviderCustom: NextPage<PropsWithChildren> = ({children}) => {
  const {data: sessionData} = useSession();
  const {colorScheme, toggleColorScheme} = useColorScheme();
  const {push} = useRouter();
  const ctx = api.useContext();

  const {mutate: kanji} = api.user.createAllKanjiByUserLevel.useMutation({
    onSuccess() {
      void ctx.user.getUserKanji.invalidate();
    },
  });

  const {data} = api.kanji.getAll.useQuery(undefined, {
    enabled: !!sessionData?.user,
    onSuccess(data) {
      void kanji({data});
    },
  });

  const actions: SpotlightAction[] | undefined = data?.map(({kanji, meanings}) => ({
    title: kanji, description: meanings.join(', '), onTrigger: () => push(`/kanji/${kanji}`),
  }));

  return (<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
    <MantineProvider theme={{colorScheme, loader: 'dots'}} withGlobalStyles withNormalizeCSS>
      <SpotlightProvider limit={5} shortcut={['mod + P', 'mod + K', '/']}
                         actions={!actions ? [] : actions}>
        <Layout>
          {children}
        </Layout>
      </SpotlightProvider>
    </MantineProvider>
  </ColorSchemeProvider>);
};

export default MantineProviderCustom;