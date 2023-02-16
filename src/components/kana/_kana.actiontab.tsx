import {ActionIcon, Group, Paper, Tooltip} from "@mantine/core";
import {IconEye, IconEyeOff, IconReload} from "@tabler/icons";
import {useBurgerStore, useKanaGameStore} from "@store/store";
import {useKanaActionTabStyles} from "@components/kana/styles/kanaActionTab.styles";

export const KanaActionTab = () => {
  const {concentrateMode, toggleConcentrateMode} = useBurgerStore();
  const {toggles, disabled} = useKanaGameStore();
  const {classes} = useKanaActionTabStyles();

  const onRetype = () => {
    toggles.isCorrect(null);
    toggles.toggleDisabled(false);
  };

  return (
      <Paper className={classes.paper} mt={-2} p="sm" radius={0}>
        <Group position={"apart"}>
          <Tooltip withArrow label={"Concentrate Mode"}>
            <ActionIcon onClick={() => toggleConcentrateMode()}>
              {!concentrateMode ? <IconEye size={18}/> : <IconEyeOff size={18}/>}
            </ActionIcon>
          </Tooltip>

          <Tooltip disabled={!disabled} withArrow label={"Retype"}>
            <ActionIcon disabled={!disabled} onClick={() => onRetype()}>
              <IconReload size={18}/>
            </ActionIcon>
          </Tooltip>
        </Group>
      </Paper>
  );
};
