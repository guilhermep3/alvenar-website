import { useCartStore } from "@/store/cart-store";
import { modalCloseStyle, modalOpenStyle, modalStyle } from "@/utils/styles";
import { useState } from "react";
import { StepUser } from "./step-user";
import { StepAddress } from "./step-address";
import { StepFinish } from "./step-finish";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useCheckoutStore } from "@/store/checkout-store";

export type steps = "user" | "address" | "finish";

export const CheckoutModal = () => {
   const [currentStep, setCurrentStep] = useState<steps>("user");
   const { isCheckoutOpen, setIsCheckoutOpen } = useCartStore();
   const { setName, setEmail, setAddress } = useCheckoutStore();

   let progressPct = 0;
   switch (currentStep) {
      case 'user':
         progressPct = 33;
         break;
      case 'address':
         progressPct = 66
         break;
      case 'finish':
         progressPct = 100
         break;
   }

   function handleCloseCheckout() {
      setIsCheckoutOpen(false);
      setTimeout(() => {
         setName('');
         setEmail('');
         setAddress('');
         setCurrentStep("user");
      }, 160);
   }

   return (
      <div className={`${modalStyle} ${isCheckoutOpen ? `${modalOpenStyle}` : `${modalCloseStyle}`}`}>
         <div className="relative flex flex-col gap-4 w-full max-w-lg bg-white text-black rounded-xl p-4 sm:p-6 z-[55]">
            <div className="absolute cursor-pointer" onClick={handleCloseCheckout}>
               <FontAwesomeIcon icon={faClose} />
            </div>
            <div className="text-center text-lg font-semibold">
               <p>{currentStep === 'user' && 'Dados pessoais'}</p>
               <p>{currentStep === 'address' && 'Endereço de entrega'}</p>
               <p>{currentStep === 'finish' && 'Enviar pedido'}</p>
            </div>
            <div className="flex flex-col w-full">
               {currentStep === 'user' && <StepUser setCurrentStep={setCurrentStep} />}
               {currentStep === 'address' && <StepAddress setCurrentStep={setCurrentStep} />}
               {currentStep === 'finish' && <StepFinish setCurrentStep={setCurrentStep} />}
            </div>
         </div>
      </div>
   )
}