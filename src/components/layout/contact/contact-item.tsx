"use client"
import { useToastStore } from "@/store/toast-store";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type props = {
   label: string;
   icon: IconProp;
}
export const ContactItem = ({ label, icon }: props) => {
   const { open, isOpen, text } = useToastStore();

   function copyText(text: string) {
      navigator.clipboard.writeText(text);
      open(text);
   }

   return (
      <div
         className={`flex gap-2 sm:gap-4 items-center p-3 border rounded-lg w-full cursor-pointer hover:border-zinc-800 transition
            ${isOpen && text === label ? 'border-[var(--primary)]' : 'border-zinc-400'}
            `}
         onClick={() => copyText(label)}
         title="Copiar"
      >
         <FontAwesomeIcon icon={icon}
            size="2x"
            className="size-5 sm:size-8 text-[var(--primary)]"
         />
         <p className="text-base sm:text-lg font-semibold">{label}</p>
         <FontAwesomeIcon icon={faCopy}
            size="2x"
            className="size-3 sm:size-5 ml-auto text-zinc-500"
         />
      </div>
   )
}