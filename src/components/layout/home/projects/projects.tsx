import { containerStyle } from "@/utils/styles"
import { SubtitleSection } from "../subititle-section"
import { TitleSection } from "../title-section"
import { TabProjects } from "./tab-projects"
import { DividerSVG } from "@/components/svg/divider"

export const Projects = () => {

  return (
    <section id="projects"
      className="relative bg-zinc-100 text-black py-20"
      >
      <DividerSVG offset />
      <div className={`${containerStyle} flex flex-col gap-14`}>
        <div className="flex flex-col items-center gap-3 text-center">
          <SubtitleSection label="Projetos" className="text-black" />
          <TitleSection label="Nossos principais projetos" className="text-black" />
          <p className="max-w-xl text-zinc-700 text-sm sm:text-base">
            Veja nossos principais projetos em cada área de atuação
          </p>
        </div>
        <TabProjects />
      </div>
    </section>
  )
}