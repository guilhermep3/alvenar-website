import Link from "next/link"
import { ReactNode } from "react";

type props = {
   label: string;
   link: string;
   icon?: ReactNode;
   size: 1 | 2 | 3;
}
export const Button = ({label, link, size, icon}: props) => {

   return (
      <Link href={`/${link}`} className="w-fit">
         <button className={`beforeBtn font-semibold bg-[var(--primary)] rounded-xl cursor-pointer flex items-center gap-4 relative overflow-hidden z-10
            ${size === 1 && 'py-3 px-6 sm:py-4 sm:px-10 text-lg'}
            ${size === 2 && 'py-3 px-5 sm:px-6 text-lg'}
            ${size === 3 && 'py-2 px-4 text-base'}`}>
            {label} {icon}
         </button>
      </Link>
   )
}