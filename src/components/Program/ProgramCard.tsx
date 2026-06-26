import CardText from "../CardText";

interface Props {
  src: string;
  alt: string;
  title: string;
  description?: string;
  role?: string;
  children?: React.ReactNode;
}

const ProgramCard = ({
  src,
  alt,
  title,
  description,
  role,
  children,
}: Props) => (
  <div className="group relative cursor-pointer">
    <div className="absolute -inset-2 rounded-3xl blur-lg transition-all duration-500 group-hover:bg-(--color-cta-primary)/15 md:-inset-3 lg:-inset-4" />

    <div className="relative overflow-hidden rounded-3xl border border-white/10 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-(--color-cta-primary)/20">
      <img
        src={src}
        alt={alt}
        className="aspect-4/5 w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

      <div className="absolute right-0 bottom-0 left-0 flex items-end justify-between gap-3 px-5 py-4 md:px-6 md:py-5 lg:px-7 lg:py-6">
        <div className="flex flex-col gap-1">
          <span className="text-lg leading-snug font-semibold text-white md:text-xl lg:text-2xl">
            {title}
          </span>
          {role && (
            <span className="leading-relaxed text-(--color-cta-primary)">
              {role}
            </span>
          )}
          {description && <CardText description={description} />}
        </div>
        {children}
      </div>
    </div>
  </div>
);

export default ProgramCard;
