import {type NavbarPropsTypes} from "@type/layout";
import {type NextPage} from "next";
import {Code, Navbar, TextInput} from "@mantine/core";
import {IconEyeTable, IconHome, IconQuestionCircle, IconSearch, IconSignature, IconTorii} from "@tabler/icons";
import {openSpotlight} from "@mantine/spotlight";
import {useUserNavbarStyles} from "@components/layout/styles/useNavbar.styles";
import UserButton from "@components/layout/_user.button";
import UserLink from "@components/layout/_user.link";

const NavbarCustom: NextPage<NavbarPropsTypes> = ({opened}) => {
	const {classes} = useUserNavbarStyles();

	return (
			<Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{sm: 300}}>

				{/*User*/}
				<Navbar.Section className={classes.section}>
					<UserButton
							image=""
							name="無名"
							level={0}
							profileLink={"/profile"}
					/>
				</Navbar.Section>

				{/*searchbar*/}
				<TextInput
						onClick={() => openSpotlight()}
						placeholder="Search"
						size="xs"
						icon={<IconSearch size={12} stroke={1.5}/>}
						rightSectionWidth={70}
						rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
						styles={{rightSection: {pointerEvents: "none"}}}
						mb="sm"
				/>


				{/*First Half*/}
				<Navbar.Section className={classes.section}>
					<div className={classes.mainLinks}>
						<UserLink
								color={"pink"}
								label={"Home"}
								pageLink={"/"}
								Icon={IconHome}
						/>
						<UserLink
								color={"green"}
								label={"Kanji list"}
								pageLink={"/kanji-list"}
								Icon={IconEyeTable}
						/>
						<UserLink
								notification={5}
								color={"orange"}
								label={"Lesson"}
								pageLink={"/lesson"}
								Icon={IconTorii}
						/>
						<UserLink
								notification={8}
								color={"indigo"}
								label={"Review"}
								pageLink={"/review"}
								Icon={IconSignature}
						/>

					</div>
				</Navbar.Section>

				{/*Second Half*/}
				<Navbar.Section className={classes.section}>
					<div className={classes.mainLinks}>
						<UserLink
								color={"grape"}
								label={"FAQ"}
								pageLink={"/faq"}
								Icon={IconQuestionCircle}
						/>
					</div>
				</Navbar.Section>

			</Navbar>
	);
};

export default NavbarCustom;