interface ButtonProps {
  text?: string;
  icon?: React.ReactNode;
  className?: string;
}

export const PrimaryButton = ({ text, icon, className }: ButtonProps) => (
  <button
    className={`
        bg-linear-to-br from-[#D4FF47] to-[#B8E63A] 
        text-black px-6 py-3 rounded-xl
        font-semibold text-md 
        hover:scale-105 hover:shadow-[0_0_40px_rgba(212,255,71,0.3)] 
        cursor-pointer transition-all duration-300
        flex items-center justify-center gap-2
        w-fit ${className}
      `}
  >
    {text && <span>{text}</span>}
    {icon && <span>{icon}</span>}
  </button>
);

export const GhostButton = ({ text, icon, className }: ButtonProps) => (
  <button
    className={`
      bg-transparent text-[#D4FF47] rounded-xl
      font-semibold text-md border-2 border-[#D4FF47]
      hover:bg-[#D4FF47] hover:text-black hover:scale-105
      cursor-pointer transition-all duration-300
      flex items-center justify-center gap-2 w-fit
      ${className}   
    `}
  >
    {icon && <span>{icon}</span>}
    {text && <span>{text}</span>}
  </button>
);
