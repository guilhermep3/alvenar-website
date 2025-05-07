import { Button } from "@/components/ui/button";
import { modalCloseStyle, modalOpenStyle, modalStyle } from "@/utils/styles"

type props = {
   name: string | null;
   email: string | null;
   isOpen: boolean;
   setIsOpen: () => void;
}
export const ModalContact = ({ name, email, isOpen, setIsOpen }: props) => {

   return (
      <div className={`${modalStyle} ${isOpen ? `${modalOpenStyle}` : `${modalCloseStyle}`}`}>
         <div className="flex flex-col gap-4 w-full max-w-xl bg-white text-black rounded-xl p-4 sm:p-6 z-[55] text-center">
            <p className="text-xl sm:text-2xl">Obrigado por entrar em contato conosco! <span className="font-semibold">{name}</span></p>
            <p>Nossa equipe entrará em contato em breve pelo <span className="font-semibold">{email}</span> para darmos início ao planejamento da sua residência dos sonhos.</p>
            <div className="mx-auto">
               <Button label="Finalizar" size={1} onClick={setIsOpen}/>
            </div>
         </div>
      </div>
   )
}