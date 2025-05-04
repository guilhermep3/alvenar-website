import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { TitleSection } from "@/components/layout/home/title-section";
import { containerStyle } from "@/utils/container-style";

export default function Page() {

   return (
      <div id="shop" className="bg-zinc-100 min-h-screen relative">
         <Header />
         <div className="bg-zinc-800 text-white w-full h-[240px] sm:h-[300px] flex justify-center items-end pb-6 sm:pb-10">
            <TitleSection label="Loja Alvenar" className="text-center" />
         </div>
         <div className={containerStyle + ' flex flex-col-reverse sm:flex-row gap-10 sm:gap-14 text-black'}>
            loja
         </div>
         <Footer />
      </div>
   )
}