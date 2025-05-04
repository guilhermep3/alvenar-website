import { create } from "zustand";

type toastType = {
   isOpen: boolean;
   text: string;
   open: (text: string) => void;
   close: () => void;
}

export const useToastStore = create<toastType>((set) => ({
   isOpen: false,
   text: "",
   open: (text: string) => set({isOpen: true, text}),
   close: () => set({isOpen: false, text: ''})
}))