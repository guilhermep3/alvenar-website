"use client"
import { useState } from "react";
import { TabBody } from "./tab-body"
import { TabHeader } from "./tab-header"

export const TabAbout = () => {
   const [active, setActive] = useState<number>(0);

   return (
      <div className="flex flex-col">
         <TabHeader active={active} setActive={setActive}/>
         <TabBody active={active} />
      </div>
   )
}