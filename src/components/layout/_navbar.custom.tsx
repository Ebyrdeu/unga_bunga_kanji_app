import {type NextPage} from "next";
import {Code, Navbar, TextInput} from "@mantine/core";
import {
	IconDeviceGamepad,
	IconEyeTable,
	IconHome,
	IconQuestionCircle,
	IconSearch,
	IconSignature,
	IconTorii
} from "@tabler/icons";
import {openSpotlight} from "@mantine/spotlight";
import {useUserNavbarStyles} from "@components/layout/styles/useNavbar.styles";
import {UserLink} from "@components/layout/_user.link";
import {UserButton} from "@components/layout/_user.button";
import {useBurgerStore} from "@utils/store";
import {useSession} from "next-auth/react";

export const NavbarCustom: NextPage = () => {
	const {classes} = useUserNavbarStyles();
	const {show} = useBurgerStore();
	const {data} = useSession();

	return (
			<Navbar p="md" hiddenBreakpoint="sm" hidden={!show} width={{sm: 300}}>

				{/*User*/}
				<Navbar.Section className={classes.section}>
					<UserButton
							image={data?.user?.image ? data.user.image : ""}
							name={data?.user?.name ? data.user.name : "無名"}
							level={data?.user?.userLevel ? data.user.userLevel : 0}
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
								color={"red"}
								label={"Kana Mini Game"}
								pageLink={"/kana"}
								Icon={IconDeviceGamepad}
						/>
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