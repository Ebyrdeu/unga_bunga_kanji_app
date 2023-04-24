import {useKanaActionTabStyles} from '@components/kana/styles/kanaActionTab.styles';
import {ActionIcon, Group, Paper, rem} from '@mantine/core';
import {useBurgerStore, useKanaGameStore} from '@store/store';
import {IconEye, IconEyeOff, IconReload} from '@tabler/icons-react';
import {type FC} from 'react';

export const KanaActionTab: FC = () => {
  const {concentrateMode, toggleConcentrateMode} = useBurgerStore();
  const {toggles, disabled} = useKanaGameStore();
  const {classes} = useKanaActionTabStyles(undefined, undefined);

  const onRetype = () => {
    toggles.isCorrect(null);
    toggles.toggleDisabled(false);
  };

  return (
      <Paper className={classes.paper} mt={-2} p="sm" radius={0}>
        <Group position={'apart'}>
          <ActionIcon aria-label={'Concentrate Mode'} onClick={() => toggleConcentrateMode()}>
            {!concentrateMode ? <IconEye size={rem(18)}/> : <IconEyeOff size={rem(18)}/>}
          </ActionIcon>

          <ActionIcon aria-label={'Retype'} disabled={!disabled} onClick={() => onRetype()}>
            <IconReload size={rem(18)}/>
          </ActionIcon>
        </Group>
      </Paper>
  );
};
