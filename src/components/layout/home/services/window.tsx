import { servicesData, servicesData2 } from "@/data/servicesData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Window = () => {

   return (
      <div className="relative container mx-auto grid grid-cols-1 sm:grid-cols-2 max-w-5xl h-[1100px] sm:h-[640px] border-[12px] border-black z-10 overflow-hidden">
         <div className="absolute bg-center bg-cover bg-no-repeat top-0 left-0 right-0 bottom-0 z-[-1] blur-sm brightness-50"
            style={{ background: `url(/window.jpg)`, backgroundAttachment: 'fixed' }}></div>
         {servicesData.map((service) => (
            <div className="flex flex-col justify-center items-center text-center gap-2 py-4 px-4 sm:px-8 border-8 border-zinc-900 text-white" key={service.id}>
               <FontAwesomeIcon
                  icon={service.icon}
                  size="3x"
                  className="text-[var(--primary)] mb-2"
               />
               <div className="font-bold text-xl sm:text-2xl">{service.title}</div>
               <p className="text-base">{service.body}</p>
            </div>
         ))}
      </div>
   )
}