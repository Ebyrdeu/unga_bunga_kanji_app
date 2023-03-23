import {useKanaActionTabStyles} from '@components/kana/styles/kanaActionTab.styles';
import {ActionIcon, Group, Paper} from '@mantine/core';
import {useBurgerStore, useKanjiGameStore} from '@store/store';
import {IconEye, IconEyeOff, IconReload} from '@tabler/icons';

export const KanjiActionTab = () => {
  const {concentrateMode, toggleConcentrateMode} = useBurgerStore();
  const {toggles, disabled, gameActions} = useKanjiGameStore();
  const {classes} = useKanaActionTabStyles();

  const onRetype = () => {
    toggles.isCorrect(null);
    toggles.toggleDisabled(false);
    gameActions.reset();
  };

  return (
      <Paper className={classes.paper} mt={-2} p="sm" radius={0}>
        <Group position={'apart'}>
          <ActionIcon aria-label={'Concentrate Mode'} onClick={() => toggleConcentrateMode()}>
            {!concentrateMode ? <IconEye size={18}/> : <IconEyeOff size={18}/>}
          </ActionIcon>

          <ActionIcon aria-label={'Retype'} disabled={!disabled} onClick={() => onRetype()}>
            <IconReload size={18}/>
          </ActionIcon>
        </Group>
      </Paper>
  );
};
