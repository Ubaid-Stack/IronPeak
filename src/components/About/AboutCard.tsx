import CardText from "../CardText";
import { cardBase } from "../../constants/styles";

interface Props {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

const AboutCard = ({ title, description, icon, className = "" }: Props) => (
  <div
    className={`group mt-3 flex items-start gap-5 bg-(--color-surface) px-5 py-4 hover:cursor-pointer h-full ${cardBase} ${className}`}
  >
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-(--color-surface) text-xl text-(--color-cta-primary) transition-all duration-300 group-hover:scale-110 group-hover:bg-(--color-cta-primary)/10">
      {icon}
    </div>
    <div className="space-y-1">
      <CardText title={title} description={description} />
    </div>
  </div>
);

export default AboutCard;
