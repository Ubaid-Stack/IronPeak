import { Check, Star } from "lucide-react";
import CardText from "../CardText";
import IncludesDetails from "./IncludesDetails";
import { GhostButton, PrimaryButton } from "../Buttons";

interface Props {
  title: string;
  description: string;
  price: string;
  items: string[];
  buttonLabel: string;
  isPopular?: boolean;
}

const Price = ({ price }: { price: string }) => (
  <div className="text-5xl font-bold text-(--color-text-white)">{price}</div>
);

const MembershipCard = ({
  title,
  description,
  price,
  items,
  buttonLabel,
  isPopular,
}: Props) => {
  return (
    <div className={`relative flex flex-col ${isPopular ? "-my-4 z-10" : ""}`}>
      {/* Glow — popular card only */}
      {isPopular && (
        <div className="absolute -inset-1 bg-(--color-cta-primary)/20 blur-md rounded-3xl -z-10" />
      )}

      {/* Badge — only on popular card */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <span className="flex items-center gap-1.5 bg-(--color-cta-primary) text-black text-xs font-semibold px-4 py-1.5 rounded-full whitespace-nowrap">
            <Star size={12} fill="currentColor" /> Most Popular
          </span>
        </div>
      )}

      <div
        className={`flex flex-col gap-5 h-full rounded-3xl border 
        ${isPopular ? "border-(--color-cta-primary) py-10" : "border-white/10 py-6"} 
        bg-(--color-surface) hover:cursor-pointer px-5 transition-all duration-300 hover:-translate-y-1`}
      >
        <CardText title={title} description={description} />
        <div className="flex items-end gap-2">
          <Price price={price} />
          <CardText description="/month" />
        </div>
        <IncludesDetails
          items={items}
          icon={<Check size={12} className="text-(--color-cta-primary)" />}
        />
        <div className="mt-auto pt-4">
          {isPopular ? (
            <PrimaryButton text={buttonLabel} className="w-full" />
          ) : (
            <GhostButton text={buttonLabel} className="w-full py-3" />
          )}
        </div>
      </div>
    </div>
  );
};
export default MembershipCard;
