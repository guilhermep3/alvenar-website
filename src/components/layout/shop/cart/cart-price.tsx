import { useCartStore } from "@/store/cart-store";

export const CartPrice = () => {
   const { cart } = useCartStore();
   const allProducts = cart.map((product) => product.product);
   const allQuantity = cart.map((product) => product.quantity);
   let subtotal = 0;
   for (let item of cart){
      subtotal += item.quantity * item.product.price;
   }

   return (
      <div className="flex justify-between items-center">
         <p className="text-sm sm:text-base">Preço total:</p>
         <p className="text-lg font-semibold">R$ {subtotal.toLocaleString('pt-BR')}</p>
      </div>
   )
}