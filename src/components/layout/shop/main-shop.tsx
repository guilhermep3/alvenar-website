import { ProductItem } from "@/components/ui/product-item"
import { products } from "@/data/products"

type props = {
   selectedCategories: any;
   selectedPrices: any;
}
export const MainShop = ({selectedCategories, selectedPrices}: props) => {

   return (
      <main className="flex-1 mx-auto p-2 sm:p-6 border border-zinc-300">
         <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
            {products.map((p, index) => (
               <>
                  <ProductItem key={p.id} product={products[index]} />
               </>
            ))}
         </div>
      </main>
   )
}