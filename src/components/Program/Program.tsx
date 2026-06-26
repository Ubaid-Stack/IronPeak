import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { images } from "../../data/images";
import { sectionGrid } from "../../constants/styles";
import { GhostButton } from "../Buttons";
import AnimatedSection from "../AnimatedSection";
import ProgramCard from "./ProgramCard";
import SectionIntro from "../SectionIntro";
import { staggerContainer, staggerItem } from "../motionVariants";

const programs = [
  { src: images.strengthTraining, alt: "Strength Training", title: "Strength Training" },
  { src: images.weightLoss, alt: "Weight Loss Program", title: "Weight Loss Program" },
  { src: images.functional, alt: "Functional Fitness", title: "Functional Fitness" },
  { src: images.boxing, alt: "Boxing & Conditioning", title: "Boxing & Conditioning" },
  { src: images.yoga, alt: "Yoga & Recovery", title: "Yoga & Recovery" },
  { src: images.personal, alt: "Personal Training", title: "Personal Training" },
];

const Program = () => (
  <AnimatedSection>
    <SectionIntro
      eyebrow="Our Programs"
      title="Training for Every Goal"
      description="Whether you're building strength, losing weight, or recovering, we have a program engineered to get you there."
    />

    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className={sectionGrid}
    >
      {programs.map((program) => (
        <motion.div key={program.title} variants={staggerItem}>
          <ProgramCard
            src={program.src}
            alt={program.alt}
            title={program.title}
          >
            <GhostButton
              icon={<ArrowUpRight size={18} />}
              className="shrink-0 p-2 md:p-3 lg:p-4 group-hover:bg-(--color-cta-primary) group-hover:text-black"
            />
          </ProgramCard>
        </motion.div>
      ))}
    </motion.div>
  </AnimatedSection>
);

export default Program;
