import { product } from "@/types/product"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

type props = {
   product: product;
}
export const ProductItem = ({ product }: props) => {
   return (
      <div className="cardProduct relative flex flex-col gap-2 p-4 rounded-xl overflow-hidden w-fit bg-white text-black shadow-lg z-10 border border-zinc-300 cursor-pointer">
         <Image src={`/shop/${product.image}`} alt="sofa1" width={200} height={200} />
         <div className="flex flex-col">
            <p className="text-lg font-bold">{product.name}</p>
            <div className="flex justify-between items-end ">
               <p className="text-xl font-extrabold">R$ {product.price.toFixed(2)}</p>
               <button className="size-8 rounded-full bg-black text-white hover:bg-[var(--primary)] transition cursor-pointer flex justify-center items-center">
                  <FontAwesomeIcon icon={faPlus} />
               </button>
            </div>
         </div>
      </div>
   )
}