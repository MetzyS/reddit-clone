import { create } from "zustand";

export interface MenuTopics {
  gaming: boolean;
  sports: boolean;
  business: boolean;
  crypto: boolean;
  television: boolean;
  celebrity: boolean;
  openMenuTopics: (menu: keyof MenuTopics) => void;
  closeMenuTopics: (menu: keyof MenuTopics) => void;
}

export const useMenuTopics = create<MenuTopics>()((set) => ({
  gaming: false,
  sports: false,
  business: false,
  crypto: false,
  television: false,
  celebrity: false,
  openMenuTopics: (menu) => set((state) => ({ [menu]: !state[menu] })),
  closeMenuTopics: (menu) => set((state) => ({ [menu]: false })),
}));
