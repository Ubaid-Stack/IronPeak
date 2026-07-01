interface ButtonProps {
  text?: string;
  icon?: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
}

export const PrimaryButton = ({
  text,
  icon,
  className = "",
  type = "button",
}: ButtonProps) => (
  <button
    type={type}
    className={`flex w-fit cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-br from-(--color-cta-primary) to-(--color-cta-secondary) border-2 border-(--color-cta-primary) px-6 py-3 text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-(--shadow-glow) ${className}`}
  >
    {text && <span>{text}</span>}
    {icon && <span>{icon}</span>}
  </button>
);

export const GhostButton = ({ text, icon, className = "" }: ButtonProps) => (
  <button
    type="button"
    className={`flex w-fit cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-(--color-cta-primary) bg-transparent text-base font-semibold text-(--color-cta-primary) transition-all duration-300 hover:scale-105 hover:bg-(--color-cta-primary) hover:text-black ${className}`}
  >
    {icon && <span>{icon}</span>}
    {text && <span>{text}</span>}
  </button>
);
