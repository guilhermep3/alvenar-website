"use client"
import { AsideHeader } from "./aside-header";
import { AsideItem } from "./aside-item";
import { AsideCategory, AsidePrice } from "@/data/aside";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

type props = {
   selectedCategories: string[];
   selectedPrices: string[];
   setSelectedCategories: (val: string[]) => void;
   setSelectedPrices: (val: string[]) => void;
   isMobile: boolean;
   showAsideMobile?: boolean;
   setShowAsideMobile: () => void;
}
export const AsideShop = ({
   selectedCategories, selectedPrices, setSelectedCategories, setSelectedPrices,
   isMobile, showAsideMobile, setShowAsideMobile }: props) => {
   const toggleItem = (
      list: string[],
      setList: (val: string[]) => void,
      item: string,
      checked: boolean
   ) => {
      if (checked) {
         setList([...list, item]);
      } else {
         setList(list.filter(i => i !== item));
      }
   };

   return (
      <aside className={`flex flex-col h-screen border border-r-2 bg-zinc-100 border-zinc-300 transition duration-200
         ${isMobile ? 'fixed left-0 right-0 z-[56] max-h-3/4 w-full overflow-y-scroll' : 'sticky top-0 w-72'}
          ${isMobile ? (showAsideMobile ? '-translate-y-0' : 'translate-y-full') : ''}
      `}>
         <div className="sm:hidden">
            <FontAwesomeIcon icon={faClose} size="lg" className="size-5 p-3 mr-auto cursor-pointer" onClick={setShowAsideMobile} />
         </div>
         <div className="flex flex-col">
            <AsideHeader title="Categoria" />
            <div className="py-2">
               {AsideCategory.map((i) => (
                  <AsideItem
                     key={i.id}
                     label={i.name}
                     checked={selectedCategories.includes(i.slug)}
                     onChange={(checked) =>
                        toggleItem(selectedCategories, setSelectedCategories, i.slug, checked)
                     }
                  />
               ))}
            </div>
            <AsideHeader title="Preço" />
            <div className="py-2">
               {AsidePrice.map((i) => (
                  <AsideItem
                     key={i.id}
                     label={i.name}
                     checked={selectedPrices.includes(i.slug)}
                     onChange={(checked) =>
                        toggleItem(selectedPrices, setSelectedPrices, i.slug, checked)
                     }
                  />
               ))}
            </div>
         </div>
      </aside>
   );
};