"use client"
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { TitleSection } from "@/components/layout/home/title-section";
import { AsideShop } from "@/components/layout/shop/aside-shop";
import { MainShop } from "@/components/layout/shop/main-shop";
import { Modal } from "@/components/modal";
import { emptyProduct, product } from "@/types/product";
import { containerStyle } from "@/utils/container-style";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Page() {
   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
   const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const [productModal, setProductModal] = useState<product>(emptyProduct);

   return (
      <div id="shop" className="bg-zinc-100 min-h-screen relative">
         <Header />
         <div className="bg-zinc-800 text-white w-full h-[240px] sm:h-[300px] flex justify-center items-end pb-6 sm:pb-10">
            <TitleSection label="Loja Alvenar" className="text-center" />
         </div>
         <div className={'container mx-auto sm:py-16 w-full p-0'}>
            <div className={containerStyle + ' flex flex-col text-black'}>
               <div className="flex sm:hidden p-4 bg-white border border-zinc-300 border-b-0">
                  <FontAwesomeIcon icon={faFilter} />
               </div>
               <div className="flex">
                  <AsideShop
                     selectedCategories={selectedCategories}
                     selectedPrices={selectedPrices}
                     setSelectedCategories={setSelectedCategories}
                     setSelectedPrices={setSelectedPrices}
                  />
                  <MainShop
                     selectedCategories={selectedCategories}
                     selectedPrices={selectedPrices}
                     setIsOpen={() => setIsOpen(true)}
                     setProductModal={setProductModal}
                  />
               </div>
            </div>
         </div>
         <Footer />
         <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            productModal={productModal}
         />
      </div>
   )
}