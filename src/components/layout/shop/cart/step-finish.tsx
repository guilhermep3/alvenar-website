import { z } from "zod";
import { steps } from "./chekcout-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen, faCheck, faClipboardCheck, faTruck } from "@fortawesome/free-solid-svg-icons";

type props = {
   setCurrentStep: (newValue: steps) => void;
}
export const StepFinish = ({ setCurrentStep }: props) => {

   return (
      <div>
         <div className="flex justify-center items-center gap-2 my-2">
            <FontAwesomeIcon icon={faTruck} size="2x" className="size-10 sm:size-12 text-green-700" />
            <FontAwesomeIcon icon={faCheck} size="2x" className="size-10 sm:size-12 text-green-700" />
         </div>
         <p>Obrigado por escolher nossos móveis! Seus produtos serão entregues com segurança em sua residência em até 14 dias.</p>
         <p className="mt-2 mb-4">Fique de olho no seu e-mail — as informações da entrega serão enviadas por lá!</p>
         <Button label="Finalizar" size={2} wFull />
      </div>
   )
}