import { containerStyle } from "@/utils/styles"
import { SubtitleSection } from "../subititle-section"
import { TitleSection } from "../title-section"
import { Button } from "@/components/ui/button"
import { LocalItem } from "./local-item"

export const Local = () => {

  return (
    <section id="local" className="bg-zinc-100">
      <div className={containerStyle + ' flex flex-col md:flex-row gap-10 sm:gap-20'}>
        <div className="flex-1 flex flex-col gap-2">
          <SubtitleSection label="Local" className="text-black" />
          <TitleSection label="Locais que nós atendemos" className="text-black" />
          <p className="text-black mb-6">Conheça os estados onde podemos construir a casa ou espaço comercial dos seus sonhos!</p>
          <Button label="Contato" link="/contact" size={1} />
        </div>
        <div className="flex-1 flex flex-col text-black">
          <div className="w-full">
            <p className="text-xl sm:text-2xl font-semibold mb-6">Estamos presentes em 4 estados</p>
            <div className="flex flex-col gap-10 p-4 sm:p-6 max-w-xl bg-white shadow-md rounded-lg">
              <LocalItem state="São Paulo" quantity={70} />
              <LocalItem state="Rio de Janeiro" quantity={60} />
              <LocalItem state="Minas Gerais" quantity={40} />
              <LocalItem state="Espirito Santo" quantity={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}