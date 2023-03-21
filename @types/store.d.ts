import {type DefaultMantineColor} from '@mantine/core';

/*Burger Types*/
export interface BurgerStore {
  show: boolean;
  concentrateMode: boolean;
  toggleShow: () => void;
  toggleConcentrateMode: () => void;
}

/* Game Types */
type Correct = DefaultMantineColor | null;

interface DefaultGameTypes {
  index: number;
  handlers: Handlers;
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

export interface KanaGameStore extends DefaultGameTypes {
  disabled: boolean;
  shake: boolean;

  correct: Correct;

  toggles: Toggles;

}

export type LessonGameStore = DefaultGameTypes;
