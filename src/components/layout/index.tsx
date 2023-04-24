import {HeaderCustom} from '@components/layout/_header.custom';
import {NavbarCustom} from '@components/layout/_navbar.custom';
import {AppShell} from '@mantine/core';
import {useBurgerStore} from '@store/store';
import {type LayoutPropsTypes} from '@type/layout';
import {type FC} from 'react';
import {useLayoutStyles} from './styles/useLayout.styles';

export const Layout: FC<LayoutPropsTypes> = ({children}) => {
  const {classes} = useLayoutStyles(undefined, undefined);
  const {concentrateMode} = useBurgerStore();

  return (
      <AppShell
          className={classes.appShell}
          navbarOffsetBreakpoint="sm"
          asideOffsetBreakpoint="sm"
          navbar={concentrateMode ? undefined : <NavbarCustom/>}
          header={concentrateMode ? undefined : <HeaderCustom/>}
      >
        {children}
      </AppShell>
  );
};

