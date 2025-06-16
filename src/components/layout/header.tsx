"use client"
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { Logo } from "../ui/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { submenu } from "@/data/submenu";
import { MobileNavBtn } from "../ui/mobile-nav-btn";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Header = () => {
   const [active, setActive] = useState(false);

   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: true,
      });
   }, []);

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
      <header className={`fixed left-0 right-0 z-50 transition-all duration-500 text-white
         ${active ? 'top-0 sm:top-1' : 'top-6'}`}>
         <div className={`relative container mx-auto flex items-center justify-between px-6 py-4 transition-all duration-500
            ${active ? 'backdrop-blur-md sm:backdrop-blur-none bg-zinc-900/50 sm:bg-transparent' : 'backdrop-blur-none'}
            `}>
            <div className={`absolute top-0 left-0 right-0 hidden md:block mx-auto h-full -z-10 transition-all rounded-3xl duration-500 ease-in-out
               ${active ? 'w-full bg-zinc-900/50 backdrop-blur-md' : 'w-1/3 bg-gray-600/80'}`}></div>
            <Logo />
            <nav data-aos="zoom-in" className="hidden md:block">
               <ul className="flex gap-12">
                  <li className="relative group">
                     <a href="/" className="font-semibold text-lg hover:text-[var(--primary)] transition group-hover:text-[var(--primary)]">
                        Início
                        <FontAwesomeIcon icon={faChevronDown} size="sm" className="ml-2" />
                     </a>
                     <div className="absolute left-0 top-full mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-50 overflow-hidden">
                        {submenu.map((i) => (
                           <a href={`#${i.href}`} key={i.href}
                              className="block px-4 py-2 hover:bg-gray-700 hover:text-[var(--primary)]">
                              {i.name}
                           </a>
                        ))}
                     </div>
                  </li>
                  <li>
                     <a href="/shop" className="font-semibold text-lg hover:text-[var(--primary)] transition">Loja</a>
                  </li>
               </ul>
            </nav>
            <div className="flex items-center gap-2">
               <Button label="Contato" size={1}
                  link="/contact"
                  icon={<FontAwesomeIcon icon={faArrowRight} />}
               />
               <div className="block sm:hidden">
                  <MobileNavBtn />
               </div>
            </div>
         </div>
      </header>
   );
};
