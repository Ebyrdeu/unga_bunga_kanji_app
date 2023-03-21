import type {BurgerStore, KanaGameStore} from '@type/store';
import {create} from 'zustand';

export const useBurgerStore = create<BurgerStore>(set => ({
  show: false,
  concentrateMode: false,
  toggleShow: () => set((state) => ({show: !state.show})),
  toggleConcentrateMode: () => set((state) => ({concentrateMode: !state.concentrateMode})),
}));

export const useKanaGameStore = create<KanaGameStore>(set => ({
  disabled: false,
  shake: false,
  correct: null,
  index: 0,
  handlers: {
    increment: () => set(state => ({index: state.index + 1})),
    set: (value) => set(() => ({index: value})),
  },
  toggles: {
    toggleDisabled: (value) => set(() => ({disabled: value})),
    isCorrect: (value) => set(() => ({correct: value})),
    shook: (value) => set(() => ({shake: value})),
  },
}));

