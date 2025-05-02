"use client"
import { useEffect, useRef, useState } from "react";

type props = {
   from: number;
   to: number;
}
export const NumberTransition = ({ from, to }: props) => {
   const [currentNumber, setCurrentNumber] = useState(from);
   const numberRef = useRef(null);

   useEffect(() => {
      const handleCheckView = (entries: IntersectionObserverEntry[]) => {
         const [entry] = entries;
         if (entry.isIntersecting) {
            const interval = setInterval(() => {
               setCurrentNumber((prev) => {
                  if (prev > to) {
                     return prev - 1;
                  } else {
                     clearInterval(interval);
                     return prev;
                  }
               })
            }, 100);

            return () => clearInterval(interval);
         }
      }

      const observer = new IntersectionObserver(handleCheckView, {
         threshold: 0.2
      });

      if (numberRef.current) {
         observer.observe(numberRef.current);
      };


   }, [])

   return (
      <p ref={numberRef}>{currentNumber}</p>
   )
}