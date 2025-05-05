import { useCartStore } from "@/store/cart-store";
import Image from "next/image";
import { Button } from "./ui/button";
import { CartItem } from "./layout/shop/cart/cart-item";
import { CartPrice } from "./layout/shop/cart/cart-price";
import { CheckoutModal } from "./layout/shop/cart/chekcout-modal";
import { modalCloseStyle, modalOpenStyle, modalStyle } from "@/utils/styles";

type props = {
}
export const ModalCart = ({ }: props) => {
   const { isModalOpen, setIsModalOpen, setIsCheckoutOpen, cart } = useCartStore();

   function handleBuyProducts() {
      if (cart.length > 0) {
         setIsCheckoutOpen(true);
      }
   }

   return (
      <div className={`${modalStyle} ${isModalOpen ? `${modalOpenStyle}` : `${modalCloseStyle}`}`}
         onClick={() => setIsModalOpen(false)}
      >
         <div className="absolute top-0 right-0 bottom-0 flex flex-col gap-6 w-3/4 sm:w-full sm:max-w-sm bg-white text-black p-4 sm:p-6 z-[55]"
            onClick={(e) => e.stopPropagation()}
         >
            <div className="flex justify-between items-center gap-2">
               <Image src={'/logo.png'} alt="logo.png"
                  width={44} height={44} />
               <p className="text-lg font-bold">Carrinho de compras</p>
            </div>
            <ul>
               <CartItem />
            </ul>
            <CartPrice />
            <div className={`${cart.length > 0 ? '' : 'opacity-50'}`}>
               <Button label="Comprar"
                  size={1}
                  wFull
                  onClick={() => handleBuyProducts()}
               />
            </div>
         </div>
      </div>
   )
}