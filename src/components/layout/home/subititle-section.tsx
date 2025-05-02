type props = {
   label: string;
   className?: string;
}
export const SubtitleSection = ({label, className}: props) => {

   return (
      <h2 className={`text-base sm:text-lg ${className}`}>
         {label}
      </h2>
   )
}