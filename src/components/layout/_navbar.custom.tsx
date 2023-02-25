import {type NextPage} from "next";
import {Code, Navbar, TextInput} from "@mantine/core";
import {
  IconDeviceGamepad,
  IconEyeTable,
  IconHome,
  IconQuestionCircle,
  IconSearch,
  IconSignature,
  IconTorii,
  IconUsers,
} from "@tabler/icons";
import {openSpotlight} from "@mantine/spotlight";
import {useUserNavbarStyles} from "@components/layout/styles/useNavbar.styles";
import {UserLink} from "@components/layout/_user.link";
import {UserButton} from "@components/layout/_user.button";
import {useBurgerStore} from "@store/store";
import {useUser} from "@hooks/useUser";

export const NavbarCustom: NextPage = () => {
  const {classes} = useUserNavbarStyles();
  const {show} = useBurgerStore();
  const user = useUser();

  return (
      <Navbar p="md" hiddenBreakpoint="sm" hidden={!show} width={{sm: 300}}>

        {/*User*/}
        <Navbar.Section className={classes.section}>
          <UserButton
              image={user?.image ? user.image : ""}
              name={user?.name ? user.name : "無名"}
              level={user?.userLevel ? user.userLevel : 0}
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
                icon={IconHome}
            />
            <UserLink
                color={"green"}
                label={"Kanji list"}
                pageLink={"/kanji-list"}
                icon={IconEyeTable}
            />
            <UserLink
                notification={5}
                color={"orange"}
                label={"Lesson"}
                pageLink={"/lesson"}
                icon={IconTorii}
            />
            <UserLink
                notification={8}
                color={"indigo"}
                label={"Review"}
                pageLink={"/review"}
                icon={IconSignature}
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
                icon={IconDeviceGamepad}
            />
            <UserLink
                color={"grape"}
                label={"FAQ"}
                pageLink={"/faq"}
                icon={IconQuestionCircle}
            />

          </div>
        </Navbar.Section>

        {/*Third Half*/}
        {user?.role !== "ADMIN" ? null :
            <Navbar.Section className={classes.section}>
              <div className={classes.mainLinks}>
                <UserLink
                    color={"yellow"}
                    label={"Kanji List Admin"}
                    pageLink={"/kanji-list-admin"}
                    icon={IconEyeTable}
                />
                <UserLink
                    color={"teal"}
                    label={"User List Admin"}
                    pageLink={"/user-list"}
                    icon={IconUsers}
                />

              </div>
            </Navbar.Section>
        }

      </Navbar>
  );
};