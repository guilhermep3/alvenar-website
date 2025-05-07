import { project } from "@/types/projects";
import { faExpand, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { useState } from "react";

type props = {
   item: project;
}
export const TabItem = ({ item, }: props) => {
   const [isLoading, setIsLoading] = useState<boolean>(true);

   return (
      <div className="relative flex flex-col group cursor-pointer">
         <div className="min-w-full min-h-full max-w-xl max-h-[400px] -z-[0]">
               <Image
                  src={`/projects/${item.image}`}
                  alt={item.image}
                  width={520}
                  height={520}
                  className="w-full h-full object-cover -z-[0]"
                  placeholder="blur"
                  blurDataURL="/blur-loading.jpg"
                  onLoadingComplete={() => setIsLoading(false)}
               />
         </div>
         <div className="absolute bottom-0 left-0 right-0 text-white p-4 flex flex-col gap-4 z-10">
            <p className="text-sm text-[var(--primary)] font-semibold">{item.category}</p>
            <p className="text-xl sm:text-2xl font-semibold">{item.name}</p>
            <p className="text-base text-zinc-200">
               <FontAwesomeIcon icon={faLocationDot} className="mr-2 text-[var(--primary)]" />
               {item.local}
            </p>
         </div>
         <div className="absolute bottom-0 left-0 right-0 h-[40%] group-hover:h-[70%] z-[1] transition duration-300"
            style={{ background: 'linear-gradient(to top, #000000fa, #00000005)' }}
         ></div>
         <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center z-20
               opacity-0 group-hover:opacity-100 transition">
            <FontAwesomeIcon icon={faExpand} size="3x" className="text-[var(--primary)]" />
         </div>
      </div>
   )
}
