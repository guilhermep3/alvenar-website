import { cart } from "@/types/cart"
import { product } from "@/types/product";
import { create } from "zustand";

type CartStoreType = {
   cart: cart[];
   upsertCartItem: (product: product, quantity: number) => void;
   isModalOpen: boolean;
   setIsModalOpen: (newValue: boolean) => void;
   isCheckoutOpen: boolean;
   setIsCheckoutOpen: (newValue: boolean) => void;
}

export const useCartStore = create<CartStoreType>((set) => ({
   cart: [],
   isModalOpen: false,
   isCheckoutOpen: false,
   upsertCartItem: (product: product, quantity: number) => set((state) => {
      let newCart = state.cart;
      let productIndex = newCart.findIndex((p) => p.product.id === product.id);

      if (productIndex < 0) {
         newCart.push({ product, quantity: 0 })
         productIndex = newCart.findIndex((p) => p.product.id === product.id);
      }

      newCart[productIndex].quantity += quantity;

      if (newCart[productIndex].quantity <= 0) {
         newCart = newCart.filter((item) => item.product.id !== product.id)
      }
      console.log("newCart: ", newCart)

      return { cart: newCart };
   }),
   setIsModalOpen: (newValue: boolean) => set({ isModalOpen: newValue }),
   setIsCheckoutOpen: (newValue: boolean) => set({ isCheckoutOpen: newValue })
}))