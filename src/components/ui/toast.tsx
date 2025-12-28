"use client"
import { useToastStore } from "@/store/toast-store";
import { useEffect } from "react";

export const Toast = () => {
  const { isOpen, text, close } = useToastStore();

  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => {
        close();
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, close]);


  return (
    <div className={`fixed left-1/2 bottom-6 transform -translate-x-1/2 min-w-52 bg-white text-sm sm:text-base text-black 
         px-4 py-2 rounded-lg border border-zinc-400 shadow-lg z-50 transition duration-300
         ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
    >
      <p>Texto copiado</p>
      <p className="text-black/80">{text}</p>
    </div>
  );
};
