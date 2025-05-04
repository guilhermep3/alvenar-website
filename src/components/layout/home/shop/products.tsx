import { containerStyle } from "@/utils/container-style"
import { ProductItem } from "../../../ui/product-item"
import { TitleSection } from "../title-section"
import { SubtitleSection } from "../subititle-section"
import { armchairProducts, sofaProducts } from "@/utils/category-products"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export const Products = () => {

   return (
      <section id="products" className="bg-zinc-100 p-4 py-10 sm:py-20">
         <div className={containerStyle + ' flex flex-col lg:flex-row gap-10'}>
            <div className="flex flex-col max-w-lg">
               <SubtitleSection label="Loja" className="text-black" />
               <TitleSection label="Nossos produtos" className="text-black" />
               <p className="text-black/90 mt-4 mb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque nihil hic nulla culpa,
                  architecto repellendus soluta quas illo illum rem consectetur veritatis ratione ullam, omnis
                  minus numquam laboriosam ea maxime?
               </p>
               <Button label="Ver todos"
                  link="/"
                  size={1}
                  icon={<FontAwesomeIcon icon={faArrowRight} />}
               />
            </div>
            <div className="flex-1 flex flex-col gap-6 text-black">
               <div className="text-2xl sm:text-3xl font-bold text-center">Os 3 produtos <span className="text-[var(--primary)]">mais vendidos</span></div>
               <div className="flex-1 flex flex-col sm:flex-row justify-center items-center mx-auto gap-6">
                  {sofaProducts.slice(0, 2).map((p) => (
                     <ProductItem product={p} key={p.id} />
                  ))}
                  {armchairProducts.slice(0, 1).map((p) => (
                     <ProductItem product={p} key={p.id} />
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}