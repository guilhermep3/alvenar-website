"use client"
import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";

type props = {
   label: string;
   className?: string;
}
export const SubtitleSection = ({ label, className }: props) => {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: true,
         delay: 100,
      });
   }, []);

   return (
      <h2 data-aos="zoom-in-up" className={`text-base sm:text-lg ${className}`}>
         {label}
      </h2>
   )
}