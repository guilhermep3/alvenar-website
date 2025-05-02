import { SubtitleSection } from "../subititle-section"
import { TitleSection } from "../title-section"
import { Window } from "./window"

export const Services = () => {

   return (
      <section id="services" className="bg-zinc-100 p-4 py-10 sm:py-20">
         <div className="container mx-auto">
            <SubtitleSection label="Serviços" className="text-black text-center"/>
            <TitleSection label="Nossos serviços" className="text-black text-center mb-10"/>
            <Window />
         </div>
      </section>
   )
}