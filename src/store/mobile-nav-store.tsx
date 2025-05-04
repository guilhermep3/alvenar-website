import { create } from "zustand";

type mobileNavType = {
   isOpen: boolean;
   toggle: () => void;
   close: () => void;
};

export const usemobileNavStore = create<mobileNavType>((set) => ({
   isOpen: false,
   toggle: () => set((state) => ({ isOpen: !state.isOpen })),
   close: () => set({ isOpen: false})
}));