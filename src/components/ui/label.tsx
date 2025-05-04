type props = {
   label: string;
   htmlFor: string;
}
export const Label = ({label, htmlFor}: props) => {

   return (
      <label htmlFor={htmlFor} className="block text-sm sm:text-base font-medium text-zinc-700">
         {label}
      </label>
   )
}