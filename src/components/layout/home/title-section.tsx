type props = {
   label: string;
   className?: string;
}
export const TitleSection = ({label, className}: props) => {

   return (
      <h1 className={`text-3xl sm:text-5xl font-bold uppercase my-4 ${className}`}>
         {label}
      </h1>
   )
}