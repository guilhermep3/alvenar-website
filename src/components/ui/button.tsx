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
}
export const Button = ({ label, link, size, icon }: props) => {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: true,
      });
   }, []);

   return (
      <Link href={`${link}`} className="w-fit" data-aos="zoom-in">
         <button className={`beforeBtn font-semibold bg-[var(--primary)] rounded-xl cursor-pointer flex items-center gap-4 relative overflow-hidden z-30
            ${size === 1 && 'py-3 px-6 sm:py-4 sm:px-10 text-lg'}
            ${size === 2 && 'py-3 px-5 sm:px-6 text-lg'}
            ${size === 3 && 'py-2 px-4 text-base'}`}>
            {label} {icon}
         </button>
      </Link>
   )
}