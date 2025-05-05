import { containerStyle } from "@/utils/styles"
import { SubtitleSection } from "../subititle-section"
import { TitleSection } from "../title-section"
import { TabProjects } from "./tab-projects"
import { WoodenBand } from "@/components/wooden-band"

export const Projects = () => {

   return (
      <section id="projects" className="text-black bg-zinc-100 relative">
         <WoodenBand height={'32px'} topOrBottom="top"/>
         <div className={containerStyle+' flex flex-col gap-10'}>
            <div className="mb-4 mt-4">
               <SubtitleSection label="Projetos" className="text-black text-center" />
               <TitleSection label="Nosso principais projetos" className="text-black text-center" />
               <p className="text-center text-zinc-800">Veja nosso principais projetos em cada área</p>
            </div>
            <TabProjects />
         </div>
      </section>
   )
}