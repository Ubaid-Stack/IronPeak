import { Minus, Quote, Star } from "lucide-react";

interface Props {
  name: string;
  review: string;
  rating?: number;
}

const TestimonialCard = ({ name, review, rating = 5 }: Props) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-(--color-surface) p-7 text-white">
      <div className="flex items-start justify-between">
        <div className="flex gap-1 text-(--color-cta-primary)">
          {[...Array(rating)].map((_, index) => (
            <Star key={index} size={18} fill="currentColor" />
          ))}
        </div>

        <Quote size={36} className="text-white/10" />
      </div>

      <p className="mt-8 text-lg font-medium leading-relaxed">"{review}"</p>

      <div className="mt-4">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <span className="text-(--color-cta-primary)">
            <Minus />
          </span>{" "}
          {name}
        </h3>
      </div>
    </div>
  );
};

export default TestimonialCard;
