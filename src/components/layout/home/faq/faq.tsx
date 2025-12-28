"use client"
import { faqData } from "@/data/faq"
import { containerStyle } from "@/utils/styles"
import { FaqItem } from "./faq-item"
import { SubtitleSection } from "../subititle-section"
import { TitleSection } from "../title-section"
import { useState } from "react"

export const Faq = () => {
  const [actualFaq, setActualFaq] = useState<number | null>(null);

  const toggleOpen = (id: number) => {
    setActualFaq(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="text-white bg-zinc-950">
      <div className={containerStyle + ' flex flex-col gap-6 sm:gap-10 relative'}>
        <div className="absolute bottom-0 left-0 w-full h-full bg-center bg-cover -z-[1"
          style={{ background: `url(/house-line.webp)`, backgroundRepeat: 'no-repeat' }}></div>
        <div>
          <SubtitleSection label="FAQ" className="text-center" />
          <TitleSection label="Perguntas frequentes" className="text-center" />
        </div>
        <div className="flex flex-col justify-center gap-2 items-center w-fit mx-auto p-6 sm:p-10 z-10 border border-zinc-700 shadow-lg rounded-xl bg-zinc-900">
          {faqData.map((faq) => (
            <FaqItem
              key={faq.id}
              faq={faq}
              actualFaq={actualFaq}
              toggleOpen={toggleOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
