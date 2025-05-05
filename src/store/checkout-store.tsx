import { create } from "zustand";

type checkoutStore = {
   name: string;
   email: string;
   address: {
      state: string;
      city: string;
      district: string;
      street: string;
      number: string;
   },
   setName: (newName: string) => void;
   setEmail: (newEmail: string) => void;
   setAddress: (address: any) => void;
}

export const useCheckoutStore = create<checkoutStore>((set) => ({
   name: '',
   email: '',
   address: {
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      state: ''
   },
   setName: (newName) => set(({ name: newName })),
   setEmail: (newEmail) => set(({ email: newEmail })),
   setAddress: (address) => set(state => ({ ...state, address }))
}))