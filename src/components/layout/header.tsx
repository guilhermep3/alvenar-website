"use client"
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { Logo } from "../logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
   const [active, setActive] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 0) {
            setActive(true);
         } else {
            setActive(false);
         }
      }

      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, [])

   return (
      <header className={`fixed left-0 right-0 z-50 transition-all duration-500 ${active ? 'top-0' : 'top-6'}`}>
         <div className={`relative container mx-auto flex items-center justify-between px-6 py-4 transition-all duration-500
            ${active ? 'backdrop-blur-md sm:backdrop-blur-none bg-zinc-900/50 sm:bg-transparent' : 'backdrop-blur-none'}
            `}>
            <div className={`absolute top-0 left-0 right-0 hidden md:block mx-auto h-full -z-10 transition-all rounded-3xl duration-500 ease-in-out
               ${active ? 'w-full bg-zinc-900/50 backdrop-blur-md' : 'w-1/3 bg-gray-600/80'}`}></div>
            <Logo />
            <nav className="hidden md:block">
               <ul className="flex gap-12">
                  <li>
                     <a href="#" className="font-semibold text-lg hover:text-[var(--primary)] transition">
                        Início
                        <FontAwesomeIcon icon={faChevronDown} size="1x" className="ml-4"/>
                     </a>
                  </li>
                  <li>
                     <a href="/team" className="font-semibold text-lg hover:text-[var(--primary)] transition">Time</a>
                  </li>
                  <li>
                     <a href="/loja" className="font-semibold text-lg hover:text-[var(--primary)] transition">Loja</a>
                  </li>
               </ul>
            </nav>
            <Button label="Contato" size={1}
               link="#"
               icon={<FontAwesomeIcon icon={faArrowRight} />}
            />
         </div>
      </header>
   );
};
