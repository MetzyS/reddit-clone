import { create } from "zustand";

export interface Menu {
  menu: boolean;
  headerMenu: boolean;
  recent: boolean;
  topics: boolean;
  resources: boolean;
  submenu: boolean;
  openMenu: (menu: keyof Menu) => void;
  closeMenu: (menu: keyof Menu) => void;
}

export const useMenu = create<Menu>()((set) => ({
  menu: false,
  headerMenu: false,
  recent: true,
  topics: true,
  resources: true,
  submenu: true,
  openMenu: (menu) => set((state) => ({ [menu]: !state[menu] })),
  closeMenu: (menu) => set((state) => ({ [menu]: false })),
}));
