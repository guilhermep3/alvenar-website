"use client"
import { usemobileNavStore } from "@/store/mobile-nav-store";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MobileNav = () => {
  const { isOpen, close } = usemobileNavStore();

  return (
    <div className={`absolute inset-0 z-50 bg-zinc-900/50 transition duration-200
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={close}
    >
      <div className={`fixed top-0 w-2/3 h-full bg-zinc-900 text-white z-[55] p-6 flex flex-col gap-6 transition-all duration-300
        ${isOpen ? 'right-0' : '-right-full'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="self-end text-2xl cursor-pointer" onClick={close}>
          <FontAwesomeIcon icon={faX} size="1x" />
        </button>
        <div className="flex flex-col gap-6">
          <a href="/" onClick={close} className="hover:text-[var(--primary)] font-bold">Início</a>
          <a href="/shop" onClick={close} className="hover:text-[var(--primary)] font-bold">Loja</a>
          <a href="/contact" onClick={close} className="hover:text-[var(--primary)] font-bold">Contato</a>
        </div>
      </div>
    </div>
  );
};
