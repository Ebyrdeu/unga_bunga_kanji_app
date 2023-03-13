import {ActionIcon, Burger, Header, MediaQuery, Title, useMantineColorScheme, useMantineTheme} from "@mantine/core";
import {type NextPage} from "next";
import {useHeaderStyles} from "@components/layout/styles/useHeader.styles";
import {useBurgerStore} from "@store/store";
import {IconMoon, IconSun} from "@tabler/icons";

export const HeaderCustom: NextPage = () => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const {colorScheme, toggleColorScheme} = useMantineColorScheme();
  const theme = useMantineTheme();
  const {classes} = useHeaderStyles(undefined, undefined);
  const {show, toggleShow} = useBurgerStore();

  return (
      <Header height={{base: 50, md: 70}} p="md">
        <div className={classes.wrapper}>
          <MediaQuery largerThan="sm" styles={{display: "none"}}>
            <Burger
                aria-label="open a burger menu"
                opened={show}
                onClick={toggleShow}
                size="sm"
                color={colorScheme === "dark" ? theme.colors.gray[4] : theme.colors.gray[6]}
                mr="xl"/>
          </MediaQuery>
          <Title order={5}>Unga Bunga Kanji</Title>
          <ActionIcon
              aria-label="change theme"
              onClick={() => toggleColorScheme()}
              size="lg"
              className={classes.actionIcon}>
            {colorScheme === "dark" ? <IconSun size={18}/> : <IconMoon size={18}/>}
          </ActionIcon>
        </div>
      </Header>
  );
};

