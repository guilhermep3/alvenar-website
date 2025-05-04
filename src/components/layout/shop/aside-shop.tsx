"use client"
import { useState } from "react";
import { AsideHeader } from "./aside-header";
import { AsideItem } from "./aside-item";
import { AsideCategory, AsidePrice } from "@/data/aside";

type props = {
   selectedCategories: any;
   selectedPrices: any;
   setSelectedCategories: (val: string[]) => void;
   setSelectedPrices: (val: string[]) => void;
}
export const AsideShop = ({selectedCategories, selectedPrices, setSelectedCategories, setSelectedPrices}: props) => {

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
      <aside className="hidden lg:flex flex-col sticky top-0 h-screen w-72 border border-r-2 border-zinc-300">
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