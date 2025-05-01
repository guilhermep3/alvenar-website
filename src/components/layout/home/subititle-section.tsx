type props = {
   label: string;
}
export const SubtitleSection = ({label}: props) => {

   return (
      <h2 className="text-base sm:text-lg">
         {label}
      </h2>
   )
}