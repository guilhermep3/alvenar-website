"use client"
import { ProductItem } from "@/components/ui/product-item"
import { products } from "@/data/products"
import { product } from "@/types/product";

type props = {
  selectedCategories: string[];
  selectedPrices: string[];
  setIsOpen: () => void;
  setProductModal: (newP: product) => void;
}

export const MainShop = ({ selectedCategories, selectedPrices, setIsOpen, setProductModal }: props) => {
  const filteredProducts = products.filter((product) => {

    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(product.category)

    const matchesPrice =
      selectedPrices.length === 0 ||
      selectedPrices.some((priceRange) => {
        const [min, max] = priceRange.split("-").map(Number)
        return product.price >= min && (max ? product.price <= max : true)
      })
    return matchesCategory && matchesPrice
  })

  return (
    <main className="flex-1 mx-auto p-2 sm:p-6 border border-zinc-300">
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductItem key={product.id}
              product={product}
              haveModal={true}
              setIsOpen={setIsOpen}
              onClick={() => setProductModal(product)}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            Nenhum produto encontrado.
          </p>
        )}
      </div>
    </main>
  )
}