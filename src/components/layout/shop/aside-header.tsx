type props = {
   title: string;
}
export const AsideHeader = ({title}: props) => {

   return (
      <p className="p-3 bg-zinc-300 border-l-4 border-[var(--primary)] font-bold text-base sm:text-lg cursor-pointer">
         {title}
      </p>
   )
}