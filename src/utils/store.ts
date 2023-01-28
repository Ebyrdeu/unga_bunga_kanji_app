import {create} from "zustand";
import {type BurgerStore} from "@type/store.type";

export const useBurgerStore = create<BurgerStore>(set => ({
	show: false,
	toggleShow: () => set((state) => ({show: !state.show})),
}));
