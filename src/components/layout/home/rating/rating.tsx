import Slide from "@/components/slide"
import { containerStyle } from "@/utils/container-style"
import { SubtitleSection } from "../subititle-section"
import { TitleSection } from "../title-section"

export const Rating = () => {

   return (
      <section id="rating" className="bg-zinc-100">
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