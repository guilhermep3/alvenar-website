"use client"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";

const registerSchema = z.object({
   name: z.string().min(2),
   email: z.string().email("Email inválido"),
   number: z.string().min(9, 'Número inválido')
})
export const FormContact = () => {
   const [formData, setFormData] = useState<any>(null);
   const methods = useForm<z.infer<typeof registerSchema>>({
      resolver: zodResolver(registerSchema),
      defaultValues: {
         name: '',
         email: '',
         number: ''
      }
   });

   function onSubmit(data: z.infer<typeof registerSchema>) {
      setFormData(data)
      console.log(data)
   }

   return (
      <FormProvider {...methods} >
         <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full max-w-xl">
            <div className="flex flex-col gap-1 sm:gap-2">
               <Label label="Seu nome" htmlFor="name" />
               <Input id="name"
                  type="text"
                  placeholder="Digite seu nome"
                  {...methods.register('name')}
               />
               <Label label="Seu email" htmlFor="email" />
               <Input id="email"
                  type="email"
                  placeholder="Digite seu email"
                  {...methods.register('email')}
               />
               <Label label="Seu numero" htmlFor="number" />
               <Input id="number"
                  type="number"
                  placeholder="Digite seu número"
                  {...methods.register('number')}
               />
               <button type="submit" className="w-full p-4 bg-zinc-900 text-white rounded-xl font-bold text-lg cursor-pointer hover:bg-[var(--primary)] transition duration-200">
                  <FontAwesomeIcon icon={faEnvelope} size="1x"/> Enviar
               </button>
            </div>
         </form>
      </FormProvider>
   )
}