import { motion } from "motion/react";
import { sectionGrid } from "../../constants/styles";
import AnimatedSection from "../AnimatedSection";
import ProgramCard from "../Program/ProgramCard";
import SectionIntro from "../SectionIntro";
import { staggerContainer, staggerItem } from "../motionVariants";
import teamMembers from "./teamData";

const Team = () => (
  <AnimatedSection>
    <SectionIntro
      eyebrow="Meet the Team"
      title="Coaches Who Care"
      description="Certified, passionate professionals dedicated to helping you train safely and reach your full potential."
    />

    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className={`${sectionGrid} lg:grid-cols-2 xl:grid-cols-4`}
    >
      {teamMembers.map((member) => (
        <motion.div key={member.name} variants={staggerItem}>
          <ProgramCard
            src={member.image}
            alt={member.alt}
            title={member.name}
            description={member.specialty}
            role={member.role}
          />
        </motion.div>
      ))}
    </motion.div>
  </AnimatedSection>
);

export default Team;
