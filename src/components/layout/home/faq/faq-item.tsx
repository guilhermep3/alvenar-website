import { faq } from "@/types/faq";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

type Props = {
   faq: faq;
   actualFaq: number | null;
   toggleOpen: (id: number) => void;
};

export const FaqItem = ({ faq, actualFaq, toggleOpen }: Props) => {
   const isOpen = actualFaq === faq.id;

   return (
      <div className="py-2 cursor-pointer w-full max-w-2xl" onClick={() => toggleOpen(faq.id)}>
         <div className="flex justify-between items-center gap-2 w-full border-b border-zinc-700 pb-4">
            <h3 className="text-base sm:text-lg font-medium">{faq.question}</h3>
            <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
         </div>
         <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
         >
            <p className="text-zinc-300 text-sm sm:text-base py-2">
               {faq.answer}
            </p>
         </div>
      </div>
   );
};
