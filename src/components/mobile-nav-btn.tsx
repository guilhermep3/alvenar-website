"use client"
import { usemobileNavStore } from "@/utils/mobile-nav-store"
import { faNavicon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const MobileNavBtn = () => {
   const toggle = usemobileNavStore((state) => state.toggle);

   return (
      <>
         <FontAwesomeIcon
            icon={faNavicon}
            size="2x"
            className="block md:hidden cursor-pointer"
            onClick={toggle}
         />
      </>
   );
}
