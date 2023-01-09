import {Burger, Group, Header, MediaQuery, Text, useMantineTheme} from "@mantine/core";
import {HeaderProps} from "@/@types";
import Toggles from "@/components/layout/header/_Togles";

const HeaderCustom = ({opened, setOpened}: HeaderProps) => {
	const theme = useMantineTheme();

	return (
			<Header height={{base: 50, md: 70}} p="md">
				<div style={{display: "flex", alignItems: "center", justifyContent: "space-between", height: "100%"}}>

					
					<Group noWrap>
						<MediaQuery largerThan="sm" styles={{display: "none"}}>
							<Burger
									opened={opened}
									onClick={() => setOpened((o: boolean) => !o)}
									size="sm"
									color={theme.colors.gray[6]}
									mr="xl"
							/>
						</MediaQuery>
						<Text>Unga Bunga</Text>
					</Group>

					{/*White/Dark Theme */}
					<Toggles/>
				</div>
			</Header>
	);
};

export default HeaderCustom;