type props = {
   label: string;
}
export const TitleSection = ({label}: props) => {

   return (
      <h1 className="text-3xl sm:text-5xl font-bold uppercase my-4">
         {label}
      </h1>
   )
}