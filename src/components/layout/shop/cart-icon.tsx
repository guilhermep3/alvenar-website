import { useCartStore } from "@/store/cart-store"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const CartIcon = () => {
   const { cart } = useCartStore();

   return (
      <div className="relative ml-auto bg-[var(--primary)] size-10 flex justify-center items-center rounded-md cursor-pointer">
         <FontAwesomeIcon
            icon={faCartShopping}
            size="1x"
            className="size-5 bg-[var(--primary)] text-center text-white rounded-md"
         />
         {cart.length > 0 &&
            <span className="absolute -top-2 -right-2 size-5 text-sm rounded-full bg-red-500 text-center text-white">
               {cart.length}
            </span>
         }
      </div>
   )
}