const buttons = ['História', 'Missão', 'Diferencial']

type props = {
   active: number;
   setActive: (a: number) => void
}
export const TabHeader = ({ active, setActive }: props) => {

   return (
      <div className="flex items-start gap-6">
         {buttons.map((b, index) => (
            <button key={index}
               className={`w-fit p-2 border-b-2 cursor-pointer font-bold text-lg hover:text-black hover:border-black transition duration-300
               ${active === index ? 'text-black border-black' : 'text-black/50 border-transparent'}`}
               onClick={() => setActive(index)}
            >
               {b}
            </button>
         ))}
      </div>
   )
}