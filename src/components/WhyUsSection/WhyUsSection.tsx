import { motion } from "motion/react";
import {
  Award,
  Clock5,
  Cpu,
  CreditCard,
  Target,
  UsersRound,
} from "lucide-react";
import { sectionGrid } from "../../constants/styles";
import AboutCard from "../About/AboutCard";
import AnimatedSection from "../AnimatedSection";
import SectionIntro from "../SectionIntro";
import { staggerContainer, staggerItem } from "../motionVariants";

const whyUsItems = [
  {
    title: "Professional Coaching",
    description:
      "Work with certified experts who keep you accountable and progressing.",
    icon: <Award />,
  },
  {
    title: "Modern Equipment",
    description:
      "Premium machines and free weights maintained to the highest standard.",
    icon: <Cpu />,
  },
  {
    title: "Flexible Memberships",
    description:
      "Plans that fit your lifestyle with no long-term lock-in required.",
    icon: <CreditCard />,
  },
  {
    title: "Personalized Programs",
    description: "Training tailored to your body, goals, and pace of progress.",
    icon: <Target />,
  },
  {
    title: "Community Support",
    description:
      "Train alongside a motivating community that lifts each other up.",
    icon: <UsersRound />,
  },
  {
    title: "Open 24/7",
    description:
      "Train whenever it suits you with round-the-clock facility access.",
    icon: <Clock5 />,
  },
];

const WhyUsSection = () => (
  <AnimatedSection>
    <SectionIntro
      eyebrow="Why Iron Peak"
      title="A Premium Training Experience"
      description="Everything we do is built to keep you motivated, supported, and progressing toward your strongest self."
    />

    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className={sectionGrid}
    >
      {whyUsItems.map((item) => (
        <motion.div key={item.title} variants={staggerItem}>
          <AboutCard
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        </motion.div>
      ))}
    </motion.div>
  </AnimatedSection>
);

export default WhyUsSection;
