import {
  Award,
  Clock5,
  Cpu,
  CreditCard,
  Target,
  UsersRound,
} from "lucide-react";
import AboutCard from "../About/AboutCard";
import Description from "../Description";
import SectionHeading from "../SectionHeading";
import Heading from "../heading";

const WhyUsSection = () => {
  const whyAs = [
    {
      title: "Professional Coaching",
      description:
        "Work with certified experts who keep you accountable and progressing.",
      icons: <Award />,
    },
    {
      title: "Modern Equipment",
      description:
        "Premium machines and free weights maintained to the highest standard.",
      icons: <Cpu />,
    },
    {
      title: "Flexible Memberships",
      description:
        "Plans that fit your lifestyle with no long-term lock-in required.",
      icons: <CreditCard />,
    },
    {
      title: "Personalized Programs",
      description:
        "Training tailored to your body, goals, and pace of progress.",
      icons: <Target />,
    },
    {
      title: "Community Support",
      description:
        "Train alongside a motivating community that lifts each other up.",
      icons: <UsersRound />,
    },
    {
      title: "Open 24/7",
      description:
        "Train whenever it suits you with round-the-clock facility access.",
      icons: <Clock5 />,
    },
  ];
  return (
    <section>
      <div>
        <SectionHeading title="Why Iron Peak" />
        <Heading text="A Premium Training Experience" />
        <Description text="Everything we do is built to keep you motivated, supported, and progressing toward your strongest self." />
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
        {whyAs.map((w, index) => (
          <AboutCard
            key={index}
            className="w-fit"
            title={w.title}
            description={w.description}
            icon={w.icons}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyUsSection;
