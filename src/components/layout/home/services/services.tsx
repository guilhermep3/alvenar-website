import { TitleSection } from "../title-section"
import { Window } from "./window"

export const Services = () => {

   return (
      <section id="services" className="bg-zinc-200 p-4 py-10 sm:py-20">
         <div className="container mx-auto">
            <TitleSection label="Nossos serviços" className="text-black text-center mb-10"/>
            <Window />
         </div>
      </section>
   )
}