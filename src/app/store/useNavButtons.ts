import { create } from "zustand";

export interface NavButtonMenu {
  type: boolean;
  country: boolean;
  sort: boolean;
  openNavButtonMenu: (menu: keyof NavButtonMenu) => void;
  closeNavButtonMenu: (menu: keyof NavButtonMenu) => void;
}

export const useNavButtonMenu = create<NavButtonMenu>()((set) => ({
  type: false,
  country: false,
  sort: false,
  openNavButtonMenu: (menu) => set((state) => ({ [menu]: !state[menu] })),
  closeNavButtonMenu: (menu) => set((state) => ({ [menu]: false })),
}));
