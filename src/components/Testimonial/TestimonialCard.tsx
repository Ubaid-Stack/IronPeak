import { Quote, Star, TrendingUp } from "lucide-react";

interface Props {
  name: string;
  image: string;
  review: string;
  achievement: string;
  rating?: number;
}

const TestimonialCard = ({
  name,
  image,
  review,
  achievement,
  rating = 5,
}: Props) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-(--color-surface) p-7 text-white">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex gap-1 text-(--color-cta-primary)">
          {[...Array(rating)].map((_, index) => (
            <Star key={index} size={18} fill="currentColor" />
          ))}
        </div>

        <Quote size={36} className="text-white/10" />
      </div>

      {/* Review */}
      <p className="mt-8 text-lg lg:text-2xl font-medium leading-relaxed">
        "{review}"
      </p>

      {/* Achievement */}
      <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-(--color-cta-primary)/10 px-4 py-2 text-sm font-medium text-(--color-cta-primary)">
        <TrendingUp size={16} />
        {achievement}
      </div>

      {/* Divider */}
      <div className="my-8 h-px bg-white/10" />

      {/* User */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="h-14 w-14 rounded-full object-cover"
        />

        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
    </div>
  );
};

export default TestimonialCard;