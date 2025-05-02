import { WoodenBand } from "../wooden-band"

export const Marquee = () => {
   return (
      <div className="relative w-full overflow-hidden bg-stone-400 py-10">
         <WoodenBand height={'16px'} topOrBottom="top"/>
         <WoodenBand height={'16px'} topOrBottom="bottom"/>
         <div className="marquee w-full flex gap-10 text-black">
            <div className="text-2xl sm:text-4xl font-semibold shrink-0 min-w-max flex items-center gap-10">
               <p>ALVENAR</p> <p>ALVENAR</p> <p>ALVENAR</p> <p>ALVENAR</p> <p>ALVENAR</p> <p>ALVENAR</p> <p>ALVENAR</p> <p>ALVENAR</p> <p>ALVENAR</p> <p>ALVENAR</p>
            </div>
         </div>
      </div>
   )
}
