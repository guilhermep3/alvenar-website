import { z } from "zod";
import { steps } from "./chekcout-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCheckoutStore } from "@/store/checkout-store";

const formSchema = z.object({
   state: z.string().min(2, 'Digite o nome do seu estado.'),
   city: z.string().min(2, 'Preencha o nome da sua cidade.'),
   district: z.string().min(2, 'Preencha o distrito corretamente.'),
   street: z.string().min(2, 'Preencha o endereço corretamente.'),
   number: z.string().min(2, 'Digite o número da sua residência.'),
})
type props = {
   setCurrentStep: (newValue: steps) => void;
}
export const StepAddress = ({ setCurrentStep }: props) => {
   const { setAddress } = useCheckoutStore();
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         state: '',
         city: '',
         district: '',
         street: '',
         number: ''
      }
   });
   const { register, formState: { errors } } = form;

   function onSubmit(values: z.infer<typeof formSchema>) {
      setAddress(values);
      setCurrentStep('finish');
   }

   const ErrorMessage = ({ message }: { message?: string }) => {
      return message ? (
         <p className="text-red-500 text-sm">{message}</p>
      ) : null;
   }

   return (
      <FormProvider {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-1">
               <Label htmlFor="state" label="Seu estado" />
               <Input id="state" placeholder="Selecione o estado" {...register('state')} />
               <ErrorMessage message={errors.state?.message} />
               <div className="flex gap-1">
                  <div>
                     <Label htmlFor="city" label="Sua cidade" />
                     <Input id="city" placeholder="Digite sua cidade" {...register('city')} />
                     <ErrorMessage message={errors.city?.message} />
                  </div>
                  <div>
                     <Label htmlFor="district" label="Seu bairro" />
                     <Input id="district" placeholder="Digite seu bairro" {...register('district')} />
                     <ErrorMessage message={errors.district?.message} />
                  </div>
               </div>
               <div className="flex gap-1">
                  <div>
                     <Label htmlFor="street" label="Sua rua" />
                     <Input id="street" placeholder="Digite sua rua" {...register('street')} />
                     <ErrorMessage message={errors.street?.message} />
                  </div>
                  <div>
                     <Label htmlFor="street" label="Seu número" />
                     <Input id="street" placeholder="Digite seu número" {...register('number')} />
                     <ErrorMessage message={errors.street?.message} />
                  </div>
               </div>
               <Button label="Próximo" size={2} wFull />
            </div>
         </form>
      </FormProvider>
   )
}