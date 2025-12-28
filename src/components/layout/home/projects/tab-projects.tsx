"use client"
import { architectureProjects, comercialProjects, interiorProjects, projectsByCategory } from "@/utils/category-projects";
import { useState } from "react";
import { TabItem } from "./tab-item";

const buttons = ['Arquitetura', 'Interior', 'Comercial']

export const TabProjects = () => {
  const [active, setActive] = useState<number>(0);
  projectsByCategory();

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-start gap-6">
        {buttons.map((b, index) => (
          <button key={index}
            className={`w-fit p-2 border-b-2 cursor-pointer font-bold text-lg hover:text-black hover:border-black transition duration-300
              ${active === index ? 'text-black border-black' : 'text-black/50 border-transparent'}`}
            onClick={() => setActive(index)}
          >
            {b}
          </button>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-3 py-6 text-black/90">
        {active === 0 && (
          <>
            {architectureProjects.map((i) => (
              <TabItem item={i} key={i.id} />
            ))}
          </>
        )}
        {active === 1 && (
          <>
            {interiorProjects.map((i) => (
              <TabItem item={i} key={i.id} />
            ))}
          </>
        )}
        {active === 2 && (
          <>
            {comercialProjects.map((i) => (
              <TabItem item={i} key={i.id} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}