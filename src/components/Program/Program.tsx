import strengtImage from "../../assets/Strength-Training.jpg";
import lossImage from "../../assets/Weight-Loss-Program.jpg";
import funtionalImage from "../../assets/fucntional.jpg";
import boxingImage from "../../assets/boxing.webp";
import yogaImage from "../../assets/yoga.jpg";
import personalImage from "../../assets/personal.webp";
import ProgramCard from "./ProgramCard";
import Description from "../Description";
import Heading from "../heading";
import SectionHeading from "../SectionHeading";
import { ArrowUpRight } from "lucide-react";
import { GhostButton } from "../Buttons";

const programs = [
  {
    src: strengtImage,
    alt: "Strength Training",
    title: "Strength Training",
  },
  {
    src: lossImage,
    alt: "Weight Loss Program",
    title: "Weight Loss Program",
  },
  {
    src: funtionalImage,
    alt: "Functional Fitness",
    title: "Functional Fitness",
  },
  {
    src: boxingImage,
    alt: "Boxing & Conditioning",
    title: "Boxing & Conditioning",
  },
  {
    src: yogaImage,
    alt: "Yoga & Recovery",
    title: "Yoga & Recovery",
  },
  {
    src: personalImage,
    alt: "Personal Training",
    title: "Personal Training",
  },
];
const Program = () => {
  return (
    <section>
      <SectionHeading title="Our Programs" />
      <Heading text="Training for Every Goal" />
      <Description text="Whether you're building strength, losing weight, or recovering, we have a program engineered to get you there." />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
        {programs.map((program, index) => (
          <ProgramCard
            key={index}
            src={program.src}
            alt={program.alt}
            title={program.title}
            children={
              <GhostButton
                icon={<ArrowUpRight size={18} />}
                className="p-2 md:p-3 lg:p-4 group-hover:bg-[#D4FF47] group-hover:text-black shrink-0"
              />
            }
          />
        ))}
      </div>
    </section>
  );
};

export default Program;
