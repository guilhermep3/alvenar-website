"use client"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { ModalContact } from "./modal-contaxt";

const registerSchema = z.object({
   name: z.string().min(2, "Nome inválido"),
   email: z.string().email("Email inválido"),
   number: z.string().min(9, 'Número inválido'),
   message: z.string().min(10, "Descreva melhor o seu projeto")
})
type FormData = z.infer<typeof registerSchema>;
export const FormContact = () => {
   const [formData, setFormData] = useState<FormData>({
      name: '',
      email: '',
      number: '',
      message: ''
   });
   const methods = useForm<FormData>({
      resolver: zodResolver(registerSchema),
      defaultValues: {
         name: '',
         email: '',
         number: '',
         message: ''
      }
   });
   const { register, handleSubmit, formState: { errors }, reset } = methods;
   const [isOpen, setIsOpen] = useState(false);

   function onSubmit(data: FormData) {
      setFormData(data)
      setIsOpen(true)
   }

   const ErrorMessage = ({ message }: { message?: string }) => {
      return message ? (
         <p className="text-red-500 text-sm">{message}</p>
      ) : null;
   }

   function handleCloseModal() {
      setIsOpen(false);
      setFormData({
         name: '',
         email: '',
         number: '',
         message: ''
      })
      reset();
   }

   return (
      <FormProvider {...methods} >
         <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xl">
            <div className="flex flex-col gap-1 sm:gap-2">
               <div>
                  <Label label="Seu nome" htmlFor="name" />
                  <Input id="name"
                     type="text"
                     placeholder="Digite seu nome"
                     {...register('name')}
                  />
                  <ErrorMessage message={errors.name?.message} />
               </div>
               <div>

                  <Label label="Seu email" htmlFor="email" />
                  <Input id="email"
                     type="email"
                     placeholder="Digite seu email"
                     {...register('email')}
                  />
                  <ErrorMessage message={errors.email?.message} />
               </div>
               <div>

                  <Label label="Seu numero" htmlFor="number" />
                  <Input id="number"
                     type="number"
                     placeholder="Digite seu número"
                     {...register('number')}
                  />
                  <ErrorMessage message={errors.number?.message} />
               </div>
               <div>
                  <Label label="Sua mensagem" htmlFor="message" />
                  <textarea id="message"
                     className="w-full bg-white p-3 sm:p-4 rounded-lg border border-zinc-500 mb-2 h-52 my-1"
                     placeholder="Descreva o seu projeto..."
                     {...register('message')}
                  >
                  </textarea>
                  <ErrorMessage message={errors.message?.message} />
               </div>

               <button type="submit" className="w-full p-4 bg-zinc-900 text-white rounded-xl font-bold text-lg cursor-pointer hover:bg-[var(--primary)] transition duration-200 mt-1">
                  <FontAwesomeIcon icon={faEnvelope} size="1x" /> Enviar
               </button>
            </div>
         </form>
         <ModalContact name={formData.name} email={formData.email} isOpen={isOpen} setIsOpen={handleCloseModal} />
      </FormProvider>
   )
}