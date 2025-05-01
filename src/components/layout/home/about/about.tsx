import { NumberTransition } from "@/components/number-transition"
import { SubtitleSection } from "../subititle-section"
import { TitleSection } from "../title-section"
import { containerStyle } from "@/utils/container-style"
import { TabAbout } from "./tab-about"

export const About = () => {

   return (
      <section id="about" className="bg-zinc-200 text-black">
         <div className={containerStyle+' flex items-start flex-col md:flex-row gap-10 sm:px-20'}>
            <div className="flex-1">
               <SubtitleSection label="Sobre" />
               <TitleSection label="Quem somos nós" />
               <div className="mt-12">
                  <p className="text-6xl sm:text-9xl font-bold mb-6">
                     <NumberTransition from={2025} to={2003} />
                  </p>
                  <div className="flex w-full h-1 bg-black"></div>
                  <p className="mt-2 uppercase">desde</p>
               </div>
            </div>
            <div className="flex-1">
               <TabAbout/>
            </div>
         </div>
      </section>
   )
}