import CardText from "../CardText";

interface Props {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  iconClassName?: string;  // ← control icon wrapper from outside
}

const AboutCard = ({
  title,
  description,
  icon,
  className = "",
  iconClassName = "",
}: Props) => {
  return (
    <div
      className={`
        group flex items-start gap-5
        rounded-3xl border border-white/10
        bg-(--color-surface)
        px-5 py-4 mt-3
        transition-all duration-300
        hover:-translate-y-1
        hover:cursor-pointer
        ${className}
      `}
    >
      <div
        className={`
          flex h-14 w-14 shrink-0 items-center justify-center
          rounded-2xl bg-(--color-surface)
          text-(--color-cta-primary) text-xl
          transition-all duration-300
          group-hover:scale-110 group-hover:bg-(--color-cta-primary)/10
          ${iconClassName}
        `}
      >
        {icon}
      </div>

      <div className="space-y-1">
        <CardText title={title} description={description} />
      </div>
    </div>
  );
};

export default AboutCard;