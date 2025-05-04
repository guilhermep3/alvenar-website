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

   if (!isOpen) return null;

   return (
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-lg text-black px-4 py-2 rounded-lg shadow-lg z-50 transition">
         {text} <span className="text-black/80">copiado</span>
      </div>
   );
};
