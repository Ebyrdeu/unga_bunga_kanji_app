import {UserButton} from '@components/layout/_user.button';
import {UserLink} from '@components/layout/_user.link';
import {useUserNavbarStyles} from '@components/layout/styles/useNavbar.styles';
import {useUser} from '@hooks/useUser';
import {Button, Code, Input, Navbar, rem} from '@mantine/core';
import {openSpotlight} from '@mantine/spotlight';
import {useBurgerStore} from '@store/store';
import {
  IconDeviceGamepad,
  IconEyeTable,
  IconHome,
  IconSearch,
  IconSignature,
  IconTorii,
  IconQuestionMark,
  IconUsers, IconLogout,
} from '@tabler/icons-react';

import {type NextPage} from 'next';
import {signOut} from 'next-auth/react';

export const NavbarCustom: NextPage = () => {
  const {classes} = useUserNavbarStyles();
  const {show} = useBurgerStore();
  const {user, kanji} = useUser();

  return (
      <Navbar p="md" hiddenBreakpoint="sm" hidden={!show} width={{sm: 300}}>

        {/*User Button*/}
        <Navbar.Section className={classes.section}>
          <UserButton
              image={user?.image ? user.image : ''}
              name={user?.name ? user.name : '無名'}
              level={user?.userLevel ? user.userLevel : 0}
              profileLink={'/profile'}
          />
        </Navbar.Section>

        {/*searchbar*/}
        <Input

            type={'button'}
            onClick={() => openSpotlight()}
            size="xs"
            icon={<IconSearch size={rem(12)} stroke={rem(1.5)}/>}
            rightSectionWidth={rem(70)}
            rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
            styles={{rightSection: {pointerEvents: 'none'}}}
            mb="sm"
        />

        {/*Sections*/}
        <Navbar.Section grow>
          {/*First Half*/}
          <div className={classes.section}>
            <div className={classes.mainLinks}>
              <UserLink
                  color={'pink'}
                  label={'Home'}
                  pageLink={'/'}
                  icon={IconHome}
              />
              <UserLink
                  color={'green'}
                  label={'Kanji list'}
                  pageLink={'/kanji-list'}
                  icon={IconEyeTable}
              />
              <UserLink
                  notification={kanji?.filter(k => k.srs_stage === 0).length}
                  color={'orange'}
                  label={'Lesson'}
                  pageLink={'/lesson'}
                  icon={IconTorii}
              />
              <UserLink
                  notification={kanji?.filter(
                      k => k.srs_stage > 0 && k.srs_stage < 5 && k.updatedAt <= new Date()).length}
                  color={'indigo'}
                  label={'Review'}
                  pageLink={'/review'}
                  icon={IconSignature}
              />

            </div>
          </div>

          {/*Second Half*/}
          <div className={classes.section}>
            <div className={classes.mainLinks}>
              <UserLink
                  color={'red'}
                  label={'Kana Mini Game'}
                  pageLink={'/kana'}
                  icon={IconDeviceGamepad}
              />
              <UserLink
                  color={'grape'}
                  label={'FAQ'}
                  pageLink={'/faq'}
                  icon={IconQuestionMark}
              />

            </div>
          </div>

          {/*Third Half*/}
          {user?.role !== 'ADMIN' ? null :
              <div className={classes.section}>
                <div className={classes.mainLinks}>
                  <UserLink
                      color={'yellow'}
                      label={'Kanji List Admin'}
                      pageLink={'/admin/kanji'}
                      icon={IconEyeTable}
                  />
                  <UserLink
                      color={'teal'}
                      label={'User List Admin'}
                      pageLink={'/admin/user'}
                      icon={IconUsers}
                  />

                </div>
              </div>
          }

        </Navbar.Section>


        {/*Logout Button*/}
        {!user ?
            null :
            <Button leftIcon={<IconLogout/>} color={'blue'} variant={'light'}
                    onClick={() => void signOut()}>Logout</Button>}
      </Navbar>
  );
};