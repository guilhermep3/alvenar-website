"use client"
import { product } from "@/types/product";
import { faClose, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import { useCartStore } from "@/store/cart-store";
import { modalCloseStyle, modalOpenStyle, modalStyle } from "@/utils/styles";

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
      <div className={`${modalStyle} ${isOpen ? `${modalOpenStyle}` : `${modalCloseStyle}`}`}
         onClick={() => setIsOpen(false)}
      >
         <div className="flex flex-col md:flex-row gap-4 w-full max-w-4xl bg-white text-black rounded-xl p-4 sm:p-6 z-[55]"
            onClick={(e) => e.stopPropagation()}
         >
            <span className="absolute cursor-pointer p-1" onClick={() => setIsOpen(false)}>
               <FontAwesomeIcon icon={faClose} size="1x" />
            </span>
            <div className="w-full max-w-md max-h-md">
               <Image src={`/shop/${productModal.image}`} alt={productModal.image}
                  width={400} height={400} className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-4 w-full">
               <p className="text-xl sm:text-2xl font-bold">{productModal.name}</p>
               <p className="text-sm text-zinc-800">{productModal.description}</p>
               <div className="flex justify-between items-center mt-auto">
                  <p className="text-base sm:text-lg font-semibold">Preço:</p>
                  <p className="text-lg sm:text-xl font-semibold">R${productModal.price}</p>
               </div>
               <div className="flex justify-between items-center">
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
                  <button className={`beforeBtn relative font-semibold bg-[var(--primary)] rounded-xl cursor-pointer text-white
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