"use client"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { product } from "@/types/product"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

type Props = {
  product: product
  haveModal: boolean
  setIsOpen?: () => void
  onClick?: () => void
}

export const ProductItem = ({ product, setIsOpen, onClick }: Props) => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      delay: 100,
      easing: "ease-out-cubic",
    })
  }, [])

  function handleProductClicked() {
    if (onClick && setIsOpen) {
      setIsOpen()
      onClick()
    }
  }

  return (
    <div data-aos="fade-up"
      onClick={handleProductClicked}
      className="group relative flex flex-col gap-3 p-2 rounded-2xl bg-white text-black border
       border-zinc-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer w-[220px]"
    >
      <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-zinc-100">
        <Image
          src={`/shop/${product.image}`}
          alt={product.name}
          fill
          className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-zinc-700 line-clamp-2">
          {product.name}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold tracking-tight">
            R$ {product.price.toFixed(2)}
          </p>
          <button className="size-8 rounded-full bg-zinc-900 text-white flex items-center justify-center 
            transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:scale-110"
          >
            <FontAwesomeIcon icon={faPlus} size="sm" />
          </button>
        </div>
      </div>
    </div>
  )
}
