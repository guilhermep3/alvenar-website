"use client"
import { usemobileNavStore } from "@/store/mobile-nav-store";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MobileNav = () => {
   const { isOpen, close } = usemobileNavStore();

   return (
      <div className={`fixed top-0 w-2/3 h-full bg-zinc-900 text-white z-50 p-6 flex flex-col gap-6 transition-all duration-300
      ${isOpen ? 'right-0' : '-right-full'}`}>
         <button className="self-end text-2xl cursor-pointer" onClick={close}>
            <FontAwesomeIcon icon={faX} size="1x" />
         </button>
         <div className="flex flex-col gap-6">
            <a href="/" onClick={close} className="hover:text-[var(--primary)] font-bold">Início</a>
            <a href="/shop" onClick={close} className="hover:text-[var(--primary)] font-bold">Loja</a>
            <a href="/contact" onClick={close} className="hover:text-[var(--primary)] font-bold">Contato</a>
         </div>
      </div>
   );
};
