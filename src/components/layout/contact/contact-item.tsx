"use client"
import { useToastStore } from "@/store/toast-store";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

type props = {
  label: string;
  icon: IconProp;
}
export const ContactItem = ({ label, icon }: props) => {
  const { open, isOpen, text } = useToastStore()
  const [copied, setCopied] = useState(false)

  function copyText(value: string) {
    navigator.clipboard.writeText(value)
    open(value)
    setCopied(true)
  }

  useEffect(() => {
    if (!copied) return

    const timer = setTimeout(() => {
      setCopied(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [copied])

  return (
    <div className={`flex gap-2 sm:gap-4 items-center p-3 border rounded-lg w-full cursor-pointer hover:border-zinc-800 transition
      ${isOpen && text === label ? 'border-[var(--primary)]' : 'border-zinc-400'}`}
      onClick={() => copyText(label)}
      title="Copiar"
    >
      <FontAwesomeIcon icon={icon} size="2x"
        className="size-5 sm:size-8 text-[var(--primary)]"
      />
      <p className="text-base sm:text-lg font-semibold">{label}</p>
      <FontAwesomeIcon icon={copied ? faCheck : faCopy} size="2x"
        className="size-3 sm:size-5 ml-auto text-zinc-500"
      />
    </div>
  )
}