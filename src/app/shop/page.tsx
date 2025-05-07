"use client"
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { TitleSection } from "@/components/layout/home/title-section";
import { AsideShop } from "@/components/layout/shop/aside-shop";
import { CartIcon } from "@/components/layout/shop/cart/cart-icon";
import { CheckoutModal } from "@/components/layout/shop/cart/chekcout-modal";
import { MainShop } from "@/components/layout/shop/main-shop";
import { ModalCart } from "@/components/modal-cart";
import { ModalProduct } from "@/components/modal-product";
import { MobileNav } from "@/components/ui/mobile-nav";
import { emptyProduct, product } from "@/types/product";
import { containerStyle } from "@/utils/styles";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Page() {
   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
   const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const [productModal, setProductModal] = useState<product>(emptyProduct);
   const [isMobile, setIsMobile] = useState<boolean>(false);
   const [showAsideMobile, setShowAsideMobile] = useState<boolean>(false);

   useEffect(() => {
      const handleResize = () => {
         const mobile = window.innerWidth < 1024;
         setIsMobile(mobile);

         if (!mobile) {
            setShowAsideMobile(false);
         }
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   return (
      <div id="shop" className="bg-zinc-100 min-h-screen relative">
         <Header />
         <MobileNav />
         <div className="bg-zinc-800 text-white w-full h-[240px] sm:h-[300px] flex justify-center items-end pb-6 sm:pb-10">
            <TitleSection label="Loja Alvenar" className="text-center" />
         </div>
         <div className={'container mx-auto sm:py-16 w-full p-0'}>
            <div className={containerStyle + ' flex flex-col text-black'}>
               <div className="flex p-4 bg-white border border-zinc-300 border-b-0">
                  <div className="sm:hidden bg-[var(--primary)] size-10 flex justify-center items-center rounded-md cursor-pointer"
                     onClick={() => setShowAsideMobile(prev => !prev)}
                  >
                     <FontAwesomeIcon icon={faFilter}
                        size="1x"
                        className="size-5 bg-[var(--primary)] text-white"
                     />
                  </div>
                  <CartIcon />
               </div>
               <div className="flex relative">
                  <AsideShop
                     selectedCategories={selectedCategories}
                     selectedPrices={selectedPrices}
                     setSelectedCategories={setSelectedCategories}
                     setSelectedPrices={setSelectedPrices}
                     isMobile={isMobile}
                     showAsideMobile={showAsideMobile}
                     setShowAsideMobile={() => setShowAsideMobile(false)}
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
         <ModalProduct
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            productModal={productModal}
         />
         <ModalCart />
         <CheckoutModal />
         {isMobile && showAsideMobile &&
            <div className="absolute bg-black/60 inset-0 z-[54]" onClick={() => setShowAsideMobile(false)}></div>
         }
      </div>
   )
}