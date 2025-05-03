import Image from "next/image"

export const Logo = () => {

   return (
      <div className="flex items-center gap-1 sm:gap-2 z-50">
         <Image src={'/logo.png'} alt="logo" width={48} height={48} />
         <p className="hidden sm:block text-2xl sm:text-3xl font-bold">Alvenar</p>
      </div>
   )
}