import {type DefaultMantineColor} from "@mantine/core";

/*Burger Types*/
export interface BurgerStore {
  show: boolean;
  concentrateMode: boolean;
  toggleShow: () => void;
  toggleConcentrateMode: () => void;
}

/*Kana Game Types */
type Correct = DefaultMantineColor | null;

export interface KanaGameStore {
  disabled: boolean;
  shake: boolean;
  index: number;
  correct: Correct;
  handlers: Handlers;
  toggles: Toggles;

}

interface Handlers {
  readonly increment: () => void;
  readonly set: (value: number) => void;
}

interface Toggles {
  readonly toggleDisabled: (value: boolean) => void;
  readonly shook: (value: boolean) => void;
  readonly isCorrect: (value: Correct) => void;
}