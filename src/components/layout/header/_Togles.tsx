import {ActionIcon, Box, Center, Group, SegmentedControl, useMantineColorScheme} from "@mantine/core";
import {IconMoon, IconSearch, IconSun} from "@tabler/icons";
import {openSpotlight} from "@mantine/spotlight";

const Toggles = () => {
	const {colorScheme, toggleColorScheme} = useMantineColorScheme();

	return (
			<Group position="center" my="xl">
				<ActionIcon color={"blue"} onClick={() => openSpotlight()}>
					<IconSearch size={16}/>
				</ActionIcon>
				<SegmentedControl
						value={colorScheme}
						onChange={(value: "light" | "dark") => toggleColorScheme(value)}
						data={[
							{
								value: "light",
								label: (
										<Center>
											<IconSun size={16} stroke={1.5}/>
											<Box ml={10}>Light</Box>
										</Center>
								),
							},
							{
								value: "dark",
								label: (
										<Center>
											<IconMoon size={16} stroke={1.5}/>
											<Box ml={10}>Dark</Box>
										</Center>
								),
							},
						]}
				/>
			</Group>
	);
};

export default Toggles;