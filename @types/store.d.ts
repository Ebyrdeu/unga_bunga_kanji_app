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
  disabled: boolean;

  correct: Correct;

  toggles: Toggles;
}

interface Handlers {
  readonly increment: () => void;
  readonly set: (value: number) => void;
}

interface Toggles {
  readonly toggleDisabled: (value: boolean) => void;
  readonly isCorrect: (value: Correct) => void;
}

export interface KanaGameStore extends DefaultGameTypes {

  index: number;

  handlers: Handlers;

}

export interface KanjiGameStore extends DefaultGameTypes {

  reading: string;

  gameActions: {
    readonly reset: () => void;
    readonly set: (value: string) => void;
  };
}

