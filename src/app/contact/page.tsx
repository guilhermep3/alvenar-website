import { ContactItem } from "@/components/layout/contact/contact-item";
import { FormContact } from "@/components/layout/contact/form";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { TitleSection } from "@/components/layout/home/title-section";
import { Toast } from "@/components/ui/toast";
import { containerStyle } from "@/utils/container-style";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Page() {

   return (
      <div id="contact" className="bg-zinc-100 min-h-screen relative">
         <Header />
         <Toast/>
         <div className="bg-zinc-800 w-full h-[240px] sm:h-[300px] flex justify-center items-end pb-6 sm:pb-10">
            <TitleSection label="Entre em contato" className="text-center" />
         </div>
         <div className={containerStyle + ' flex flex-col-reverse sm:flex-row gap-10 sm:gap-14 text-black'}>
            <div className="flex-1">
               <p className="text-2xl sm:text-3xl font-semibold mb-4">
                  Dê o primeiro passo para construir o lar dos seus sonhos
               </p>
               <p className="text-sm sm:text-base">
                  Valorizamos soluções modernas, funcionais e inovadoras para transformar seu sonho em realidade. 
                  Com uma arquitetura autoral e exclusiva, entregamos seu projeto com agilidade, sem abrir mão da 
                  excelência em cada detalhe. Conosco, você ainda pode garantir um desconto especial na arquitetura 
                  interna com nossos móveis.
               </p>
               <div className="flex flex-col gap-4 mt-6">
                  <ContactItem label="emailalvenar@email.com" icon={faEnvelope}/>
                  <ContactItem label="987654321" icon={faPhone}/>
                  <ContactItem label="Pinheiros, São Paulo - Brasil" icon={faLocationDot}/>
               </div>
            </div>
            <div className="flex-1">
               <FormContact />
            </div>
         </div>
         <Footer />
      </div>
   )
}