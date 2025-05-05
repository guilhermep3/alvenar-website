"use client"
import Slide from "@/components/slide"
import { containerStyle } from "@/utils/styles"
import { SubtitleSection } from "../subititle-section"
import { TitleSection } from "../title-section"
import { WoodenBand } from "@/components/wooden-band"
import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Rating = () => {   
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: true,
      });
   }, [])

   return (
      <section id="rating" className="bg-zinc-100 relative">
         <WoodenBand height={'32px'} topOrBottom="top" />
         <div className={containerStyle} data-aos="zoom-in">
            <div className="mb-10">
               <SubtitleSection label="Avaliações" className="text-black text-center" />
               <TitleSection label="Avaliações" className="text-black text-center" />
            </div>
            <Slide />
         </div>
      </section>
   )
}