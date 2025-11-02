import { WoodenBand } from "../wooden-band"

export const Marquee = () => {
   return (
      <div className="relative w-full overflow-hidden bg-stone-400 py-10">
         <WoodenBand height={'16px'} topOrBottom="top" />
         <WoodenBand height={'16px'} topOrBottom="bottom" />
         <div className="marquee-container flex w-full gap-7">
            <div className="marquee-content flex gap-7 text-black">
               <p className="text-2xl sm:text-4xl font-semibold">ALVENAR</p>
               <p className="text-2xl sm:text-4xl font-semibold">ALVENAR</p>
               <p className="text-2xl sm:text-4xl font-semibold">ALVENAR</p>
               <p className="text-2xl sm:text-4xl font-semibold">ALVENAR</p>
               <p className="text-2xl sm:text-4xl font-semibold">ALVENAR</p>
               <p className="text-2xl sm:text-4xl font-semibold">ALVENAR</p>
               <p className="text-2xl sm:text-4xl font-semibold">ALVENAR</p>
               <p className="text-2xl sm:text-4xl font-semibold">ALVENAR</p>
               <p className="text-2xl sm:text-4xl font-semibold">ALVENAR</p>
               <p className="text-2xl sm:text-4xl font-semibold">ALVENAR</p>
            </div>
            <div className="marquee-content flex gap-7 text-black" aria-hidden="true">
               <p className="text-2xl sm:text-4xl font-semibold">ALVENAR</p>
               <p className="text-2xl sm:text-4xl font-semibold">ALVENAR</p>
               <p className="text-2xl sm:text-4xl font-semibold">ALVENAR</p>
               <p className="text-2xl sm:text-4xl font-semibold">ALVENAR</p>
               <p className="text-2xl sm:text-4xl font-semibold">ALVENAR</p>
               <p className="text-2xl sm:text-4xl font-semibold">ALVENAR</p>
               <p className="text-2xl sm:text-4xl font-semibold">ALVENAR</p>
               <p className="text-2xl sm:text-4xl font-semibold">ALVENAR</p>
               <p className="text-2xl sm:text-4xl font-semibold">ALVENAR</p>
               <p className="text-2xl sm:text-4xl font-semibold">ALVENAR</p>
            </div>
         </div>
      </div>
   )
}