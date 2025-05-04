"use client"
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type props = {
   label: string;
   icon: IconProp;
}
export const ContactItem = ({ label, icon }: props) => {

   function onClick(text: string) {

   }

   return (
      <div
         className="flex gap-2 sm:gap-4 items-center p-3 border border-zinc-400 rounded-lg w-full cursor-pointer hover:border-zinc-800 transition"
         onClick={() => onClick(label)}
         title="Copiar"
      >
         <FontAwesomeIcon icon={icon}
            size="2x"
            className="size-5 sm:size-8 text-[var(--primary)]"
         />
         <p className="text-base sm:text-lg font-semibold">{label}</p>
         <FontAwesomeIcon icon={faCopy}
            size="2x"
            className="size-4 sm:size-6 ml-auto"
         />
      </div>
   )
}