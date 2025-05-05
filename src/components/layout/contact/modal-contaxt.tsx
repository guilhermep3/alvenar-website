import { Button } from "@/components/ui/button";
import { modalCloseStyle, modalOpenStyle, modalStyle } from "@/utils/styles"

type props = {
   name: string | null;
   isOpen: boolean;
   setIsOpen: () => void;
}
export const ModalContact = ({ name, isOpen, setIsOpen }: props) => {

   return (
      <div className={`${modalStyle} ${isOpen ? `${modalOpenStyle}` : `${modalCloseStyle}`}`}>
         <div className="flex flex-col gap-4 w-full max-w-xl bg-white text-black rounded-xl p-4 sm:p-6 z-[55] text-center">
            <p className="text-xl sm:text-2xl">Obrigado por entrar em contato conosco! {name}</p>
            <p>Nossa equipe retornará em breve para darmos início ao planejamento da sua residência dos sonhos. Estamos prontos para oferecer o melhor, com dedicação e excelência.</p>
            <div className="mx-auto">
               <Button label="Finalizar" size={1} onClick={setIsOpen}/>
            </div>
         </div>
      </div>
   )
}