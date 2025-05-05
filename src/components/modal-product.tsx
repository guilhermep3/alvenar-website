"use client"
import { product } from "@/types/product";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import { useCartStore } from "@/store/cart-store";

type props = {
   isOpen: boolean;
   setIsOpen: (value: boolean) => void;
   productModal: product;
}
export const ModalProduct = ({ isOpen, setIsOpen, productModal }: props) => {
   const { cart, upsertCartItem } = useCartStore();
   const [quantity, setQuantity] = useState<number>(1);

   function handleAddProduct() {
      upsertCartItem(productModal, quantity);
      setQuantity(1);
      setIsOpen(false);
   };

   return (
      <div className={`fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-2 transition duration-300
         ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
         onClick={() => setIsOpen(false)}
      >
         <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white text-black rounded-xl p-4 sm:p-6 z-[55]"
            onClick={(e) => e.stopPropagation()}
         >
            <span className="absolute cursor-pointer p-1" onClick={() => setIsOpen(false)}>X</span>
            <div className="w-full max-w-md max-h-md">
               <Image src={`/shop/${productModal.image}`} alt={productModal.image}
                  width={400} height={400} className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-4 w-full">
               <p className="text-xl sm:text-2xl font-bold">{productModal.name}</p>
               <p className="text-sm text-zinc-800">{productModal.description}</p>
               <div className="flex justify-between items-center mt-auto">
                  <div className="flex items-center gap-2 sm:gap-4">
                     <FontAwesomeIcon icon={faMinus} className="p-2 border border-zinc-600 bg-zinc-300 transition shadow-md
                        hover:bg-[var(--primary)] rounded-lg cursor-pointer"
                        onClick={() => setQuantity((prev) => prev > 1 ? prev - 1 : prev)}
                     />
                     <p className="text-xl">{quantity}</p>
                     <FontAwesomeIcon icon={faPlus} className="p-2 border border-zinc-600 bg-zinc-300 transition shadow-md
                        hover:bg-[var(--primary)] rounded-lg cursor-pointer"
                        onClick={() => setQuantity((prev) => prev + 1)}
                     />
                  </div>
                  <button className={`beforeBtn relative font-semibold bg-[var(--primary)] rounded-xl cursor-pointer 
                     flex items-center gap-4  overflow-hidden z-30 py-3 px-6 sm:py-4 sm:px-10 text-lg`}
                     onClick={handleAddProduct}
                  >
                     Adicionar
                  </button>
               </div>
            </div>
         </div>
      </div>
   )
}