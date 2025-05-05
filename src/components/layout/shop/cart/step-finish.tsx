import { steps } from "./chekcout-modal";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTruck } from "@fortawesome/free-solid-svg-icons";
import { useCheckoutStore } from "@/store/checkout-store";
import { useCartStore } from "@/store/cart-store";

type props = {
   setCurrentStep: (newValue: steps) => void;
}
export const StepFinish = ({ setCurrentStep }: props) => {
   const { name, email } = useCheckoutStore();
   const { setIsCheckoutOpen } = useCartStore();

   function handleFinish() {
      setIsCheckoutOpen(false);
      setCurrentStep('user');
   }

   return (
      <div>
         <div className="flex justify-center items-center gap-2 my-2" onClick={handleFinish}>
            <FontAwesomeIcon icon={faTruck} size="2x" className="size-10 sm:size-12 text-green-700" />
            <FontAwesomeIcon icon={faCheck} size="2x" className="size-10 sm:size-12 text-green-700" />
         </div>
         <p>Obrigado por escolher nossos móveis <span className="font-semibold">{name}</span>! Seus produtos serão entregues com segurança em sua residência em até <span className="font-semibold">14 dias</span>.</p>
         <p className="mt-2 mb-4">Fique de olho no seu e-mail <span className="font-semibold">{email}</span> as informações da entrega serão enviadas por lá!</p>
         <Button label="Finalizar" size={2} wFull onClick={handleFinish} />
      </div>
   )
}