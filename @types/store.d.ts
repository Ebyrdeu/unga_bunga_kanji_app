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
    index: number;
    correct: Correct;
    handlers: Handlers;
    toggleDisabled: (value: boolean) => void;
    isCorrect: (value: Correct) => void;

}

interface Handlers {
    readonly increment: () => void;
    readonly set: (value: number) => void;
}