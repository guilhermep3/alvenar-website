export const Marquee = () => {
   return (
      <div className="w-full overflow-hidden bg-zinc-300 py-10">
         <div className="marquee w-full flex gap-10 text-black">
            <div className="text-2xl sm:text-4xl font-semibold shrink-0 min-w-max flex items-center gap-10">
               <p>ALVENAR</p> <p>ALVENAR</p> <p>ALVENAR</p> <p>ALVENAR</p> <p>ALVENAR</p> <p>ALVENAR</p> <p>ALVENAR</p> <p>ALVENAR</p> <p>ALVENAR</p> <p>ALVENAR</p>
            </div>
         </div>
      </div>
   )
}
