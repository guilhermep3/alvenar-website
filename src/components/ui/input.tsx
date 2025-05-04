type InputProps = {
   type?: string;
   id: string;
   placeholder?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ type = "text", id, placeholder, ...rest }: InputProps) => {
   return (
      <input
         type={type}
         id={id}
         placeholder={placeholder}
         className="w-full bg-white p-3 sm:p-4 rounded-lg border border-zinc-500 mb-2"
         {...rest}
      />
   );
};