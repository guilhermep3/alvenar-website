import Slide from "@/components/slide"
import { containerStyle } from "@/utils/container-style"
import { SubtitleSection } from "../subititle-section"
import { TitleSection } from "../title-section"
import { WoodenBand } from "@/components/wooden-band"

export const Rating = () => {

   return (
      <section id="rating" className="bg-zinc-100 relative">
         <WoodenBand height={'32px'} topOrBottom="top"/>
         <div className={containerStyle}>
            <div className="mb-10">
               <SubtitleSection label="Avaliações" className="text-black text-center"/>
               <TitleSection label="Avaliações" className="text-black text-center"/>
            </div>
            <Slide/>
         </div>
      </section>
   )
}