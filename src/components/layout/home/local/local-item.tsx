type props = {
   state: string;
   quantity: number;
}
export const LocalItem = ({state, quantity}: props) => {

   return (
      <div className="flex justify-between group">
         <p className="text-xl font-bold group-hover:text-[var(--primary)] transition duration-200">
            {state}
         </p>
         <p className="text-sm sm:text-base">Mais de
            <span className="text-xl font-semibold group-hover:text-[var(--primary)] transition duration-200"> {quantity} </span> 
            projetos
         </p>
      </div>
   )
}