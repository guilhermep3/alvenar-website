"use client"
import Link from "next/link"
import { ReactNode, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

type props = {
   label: string;
   link?: string;
   icon?: ReactNode;
   size: 1 | 2 | 3;
   wFull?: boolean;
   onClick?: () => void;
}
export const Button = ({ label, link, size, icon, wFull, onClick }: props) => {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: true,
      });
   }, []);


   return link ? (
      <Link href={`${link}`}
         data-aos="zoom-in"
         className={`beforeBtn relative font-semibold bg-[var(--primary)] rounded-xl cursor-pointer flex
         justify-center items-center gap-4 overflow-hidden z-30 text-white w-fit
         ${size === 1 && 'py-3 px-6 sm:py-4 sm:px-10 text-lg'}
         ${size === 2 && 'py-3 px-5 sm:px-6 text-lg'}
         ${size === 3 && 'py-2 px-4 text-base'}
         ${wFull && 'w-full'}
         `}
      >
         {label} {icon}
      </Link>
   ) : (
      <button className={`beforeBtn relative font-semibold bg-[var(--primary)] rounded-xl cursor-pointer flex w-fit
         justify-center items-center gap-4 overflow-hidden z-30 text-white
         ${size === 1 && 'py-3 px-6 sm:py-4 sm:px-10 text-lg'}
         ${size === 2 && 'py-3 px-5 sm:px-6 text-lg'}
         ${size === 3 && 'py-2 px-4 text-base'}
         ${wFull && 'w-full'}
         `}
         onClick={onClick}
      >
         {label} {icon}
      </button>
   )
}