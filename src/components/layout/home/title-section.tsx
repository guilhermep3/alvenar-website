"use client"
import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";

type props = {
   label: string;
   className?: string;
}
export const TitleSection = ({ label, className }: props) => {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: true,
         delay: 100,
      });
   }, []);

   return (
      <h1 data-aos="zoom-in-up" className={`text-3xl sm:text-5xl font-bold uppercase my-4 ${className}`}>
         {label}
      </h1>
   )
}