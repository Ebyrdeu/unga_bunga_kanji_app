import {useColorScheme} from '@/hooks';
import {useHeaderStyles} from '@components/layout/styles/useHeader.styles';
import {ActionIcon, Burger, Header, MediaQuery, rem, Text, useMantineTheme} from '@mantine/core';
import {useBurgerStore} from '@store/store';
import {IconMoon, IconSun} from '@tabler/icons-react';
import {type FC} from 'react';

export const HeaderCustom: FC = () => {
  const {colorScheme, toggleColorScheme} = useColorScheme();
  const {colors: {gray}} = useMantineTheme();
  const {classes} = useHeaderStyles(undefined, undefined);
  const {show, toggleShow} = useBurgerStore();

  return (
      <Header height={{base: rem(50), md: rem(70)}} p="md">
        <div className={classes.wrapper}>
          <MediaQuery largerThan="sm" styles={{display: 'none'}}>
            <Burger
                aria-label="open a burger menu"
                opened={show}
                onClick={toggleShow}
                size="sm"
                color={colorScheme === 'dark' ? gray[4] : gray[6]}
                mr="xl"/>
          </MediaQuery>
          <Text size={rem(24)}>Unga Bunga Kanji</Text>
          <ActionIcon
              aria-label="change theme"
              onClick={() => toggleColorScheme()}
              size="lg"
              className={classes.actionIcon}>
            {colorScheme === 'dark' ? <IconSun size={rem(18)}/> : <IconMoon size={rem(18)}/>}
          </ActionIcon>
        </div>
      </Header>
  );
};

