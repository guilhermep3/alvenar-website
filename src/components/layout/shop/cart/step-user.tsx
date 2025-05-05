import { z } from "zod";
import { steps } from "./chekcout-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
   name: z.string().min(2, 'Preencha seu nome'),
   email: z.string().email('Digite o email corretamente')
})
type props = {
   setCurrentStep: (newValue: steps) => void;
}
export const StepUser = ({ setCurrentStep }: props) => {
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: { name: '', email: '' }
   });
   const { register, formState: { errors } } = form

   function onSubmit(values: z.infer<typeof formSchema>) {
      // setName(values.name)
      setCurrentStep('address')
   }

   const ErrorMessage = ({ message }: { message?: string }) => {
      return message ? (
         <p className="text-red-500 text-sm">{message}</p>
      ) : null;
   }

   return (
      <FormProvider {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-1 mb-4">
               <div>
                  <Label htmlFor="name" label="Seu nome" />
                  <Input id="name" placeholder="Digite seu nome" {...register('name')} />
                  <ErrorMessage message={errors.name?.message} />
               </div>
               <div>
                  <Label htmlFor="email" label="Seu email" />
                  <Input id="email" placeholder="Digite seu email" {...register('email')} />
                  <ErrorMessage message={errors.email?.message} />
               </div>
            </div>
            <Button label="Próximo" size={2} wFull />
         </form>
      </FormProvider>
   )
}