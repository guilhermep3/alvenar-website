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
    <div className="relative group cursor-pointer overflow-hidden rounded-xl bg-zinc-200">
      <div className="relative w-full aspect-[4/3]">
        {isLoading && (
          <div className="absolute inset-0 animate-pulse bg-zinc-300" />
        )}
        <Image src={`/projects/${item.image}`} alt={item.name}
          width={480} height={480}
          className={`
            object-cover transition duration-700
            ${isLoading ? 'scale-105 blur-sm' : 'scale-100 blur-0'}
          `}
          placeholder="blur"
          blurDataURL="/blur-loading.jpg"
          onLoadingComplete={() => setIsLoading(false)}
        />
        <div
          className="absolute inset-0 z-10 transition-all duration-300 group-hover:bg-black/40"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.05))' }}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-20 p-5 text-white flex flex-col gap-2">
        <span className="text-xs uppercase tracking-wide text-[var(--primary)] font-semibold">
          {item.category}
        </span>
        <h3 className="text-lg sm:text-xl font-semibold leading-tight">
          {item.name}
        </h3>
        <p className="text-sm text-zinc-200 flex items-center gap-2">
          <FontAwesomeIcon icon={faLocationDot} className="text-[var(--primary)]" />
          {item.local}
        </p>
      </div>
      <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
        <FontAwesomeIcon icon={faExpand} size="2x" className="text-[var(--primary)]" />
      </div>
    </div>
  )
}
