"use client"
import { useCartStore } from "@/store/cart-store"
import { product } from "@/types/product";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export const CartItem = () => {
   const { cart, upsertCartItem } = useCartStore();
   const allProducts = cart.map((product) => product.product);
   const allQuantity = cart.map((product) => product.quantity)

   function handleMinusBtn(p: product) {
      upsertCartItem(p, -1);
   }

   function handlePlusBtn(p: product) {
      upsertCartItem(p, 1);
   }

   return (
      <li className="flex flex-col gap-3">
         {allProducts.map((p, index) => (
            <div key={p.id}
               className="flex justify-between"
            >
               <div className="flex gap-2">
                  <Image
                     src={`/shop/${p.image}`} alt={p.image}
                     width={56} height={56}
                     className="size-14 sm:size-16 border border-zinc-300 shadow-md rounded-lg"
                  />
                  <div className="flex flex-col justify-between h-full">
                     <p className="font-semibold">{p.name}</p>
                     <p>R${(p.price * allQuantity[index]).toLocaleString('pt-BR')}</p>
                  </div>
               </div>
               <div className="flex">
                  <div className="flex items-center gap-2 sm:gap-4">
                     <FontAwesomeIcon icon={faMinus} className="p-1 border border-zinc-600 bg-zinc-300 transition shadow-md
                        hover:bg-[var(--primary)] rounded-md cursor-pointer"
                        onClick={() => handleMinusBtn(p)}
                     />
                     <p className="text-xl">{allQuantity[index]}</p>
                     <FontAwesomeIcon icon={faPlus} className="p-1 border border-zinc-600 bg-zinc-300 transition shadow-md
                        hover:bg-[var(--primary)] rounded-md cursor-pointer"
                        onClick={() => handlePlusBtn(p)}
                     />
                  </div>
               </div>
            </div>
         ))}
      </li>
   )
}