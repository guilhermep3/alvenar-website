type Props = {
   label: string;
   checked?: boolean;
   onChange?: (checked: boolean) => void;
};

export const AsideItem = ({ label, checked = false, onChange }: Props) => {
   return (
      <label className="flex items-center gap-2 py-2 px-4 cursor-pointer hover:bg-zinc-200 transition-colors">
         <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange?.(e.target.checked)}
            className="accent-[var(--primary)] w-4 h-4 cursor-pointer"
         />
         <span className="text-sm">{label}</span>
      </label>
   );
};
