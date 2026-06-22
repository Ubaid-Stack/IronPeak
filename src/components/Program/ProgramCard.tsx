import { ArrowUpRight } from "lucide-react";
import { GhostButton } from "../Buttons";

interface Props {
  src: string;
  alt: string;
  icon?: React.ReactNode;
  title: string;
  description?: string;
}

const ProgramCard = ({ src, alt, title }: Props) => {
  return (
    <div className="relative group cursor-pointer">
      {/* Glow */}
      <div className="absolute -inset-2 md:-inset-3 lg:-inset-4 rounded-3xl blur-lg transition-all duration-500 group-hover:bg-[#D4FF47]/15" />

      {/* Card */}
      <div className="lg:w-120 relative overflow-hidden rounded-3xl border border-white/10 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[#D4FF47]/20">
        <img
          src={src}
          alt={alt}
          className="w-full lg:w-120 h-80  aspect-4/5 object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-5 py-4 md:px-6 md:py-5 lg:px-7 lg:py-6 flex items-center justify-between gap-3">
          <span className="text-white font-semibold text-lg md:text-xl lg:text-2xl leading-snug">
            {title}
          </span>
          <GhostButton
            icon={<ArrowUpRight size={18} />}
            className="p-2 md:p-3 lg:p-4 group-hover:bg-[#D4FF47] group-hover:text-black shrink-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
