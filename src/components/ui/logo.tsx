import Image from "next/image"
import Link from "next/link"

export const Logo = () => {

   return (
      <Link href={'/'} className="flex items-center gap-1 sm:gap-2 z-50">
         <Image src={'/logo.png'} alt="logo" width={48} height={48} />
         <p className="hidden sm:block text-2xl sm:text-3xl font-bold">Alvenar</p>
      </Link>
   )
}