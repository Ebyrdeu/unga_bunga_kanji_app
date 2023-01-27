import {ActionIcon, Burger, Header, MediaQuery, Text, Tooltip, useMantineColorScheme, useMantineTheme} from "@mantine/core";
import {IconMoonStars, IconSun} from "@tabler/icons";
import {type NextPage} from "next";
import {useHeaderStyles} from "@components/layout/styles/useHeader.styles";
import {useBurgerStore} from "@utils/store";

export const HeaderCustom: NextPage = () => {
	const {colorScheme, toggleColorScheme} = useMantineColorScheme();
	const theme = useMantineTheme();
	const {classes} = useHeaderStyles(undefined, undefined);
	const {show, toggleShow} = useBurgerStore();

	return (
			<Header height={{base: 50, md: 70}} p="md">
				<div className={classes.wrapper}>
					<MediaQuery largerThan="sm" styles={{display: "none"}}>
						<Burger
								opened={show}
								onClick={toggleShow}
								size="sm"
								color={colorScheme === "dark" ? theme.colors.gray[4] : theme.colors.gray[6]}
								mr="xl"
						/>
					</MediaQuery>

					<Text>Unga Bunga Kanji</Text>
					<Tooltip withArrow label={"ctrl + j"}>
						<ActionIcon
								onClick={() => toggleColorScheme()}
								size="lg"
								className={classes.actionIcon}
						>
							{colorScheme === "dark" ? <IconSun size={18}/> : <IconMoonStars size={18}/>}
						</ActionIcon>
					</Tooltip>
				</div>
			</Header>
	);
};

