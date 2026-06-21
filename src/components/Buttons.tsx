interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
}

export const PrimaryButton = ({ text, icon }: ButtonProps) => (
  <button
    className={`
        bg-linear-to-br from-[#D4FF47] to-[#B8E63A] 
        text-black px-6 py-3 rounded-full
        font-semibold text-md 
        hover:scale-105 hover:shadow-[0_0_40px_rgba(212,255,71,0.3)] 
        cursor-pointer transition-all duration-300
        flex items-center gap-2
        w-fit
      `}
  >
    {text}
    {icon && <span>{icon}</span>}
  </button>
);

export const SecondaryButton = ({ text, icon }: ButtonProps) => (
  <button
    className={`
        bg-[#2563EB] text-white px-6 py-3 rounded-full
        font-semibold text-md 
        hover:bg-[#1D4ED8] hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.3)]
        cursor-pointer transition-all duration-300
        flex items-center gap-2
      `}
  >
    {icon && <span>{icon}</span>}
    {text}
  </button>
);

export const GhostButton = ({ text, icon }: ButtonProps) => (
  <button
    className={`
        bg-transparent text-[#D4FF47] px-6 py-3 rounded-full
        font-semibold text-md border-2 border-[#D4FF47]
        hover:bg-[#D4FF47] hover:text-black hover:scale-105
        cursor-pointer transition-all duration-300
        flex items-center gap-2 w-fit
      `}
  >
    {icon && <span>{icon}</span>}
    {text}
  </button>
);