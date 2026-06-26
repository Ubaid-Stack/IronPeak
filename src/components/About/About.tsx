import { motion } from "motion/react";
import { BadgeCheck, Cpu, Target } from "lucide-react";
import { images } from "../../data/images";
import { cardHoverGlow } from "../../constants/styles";
import AboutCard from "./AboutCard";
import AnimatedSection from "../AnimatedSection";
import SectionIntro from "../SectionIntro";
import { staggerContainer, staggerItem } from "../motionVariants";

const About = () => (
  <AnimatedSection>
    <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-10">
      <div className="flex-1">
        <SectionIntro
          eyebrow="About Us"
          title="Built for Strength. Designed for You."
          description="Iron Peak is a community built around results. From world-class equipment to coaches who genuinely care, every detail is designed to help you train smarter, recover better, and reach goals you didn't think were possible."
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="mt-8 space-y-4"
        >
          {[
            {
              title: "Certified Coaches",
              description:
                "Trained, accredited professionals in every discipline.",
              icon: <BadgeCheck />,
            },
            {
              title: "Premium Equipment",
              description: "High-quality gear designed for peak performance.",
              icon: <Cpu />,
            },
            {
              title: "Personalized Plans",
              description: "Programs built around your unique goals.",
              icon: <Target />,
            },
          ].map((card) => (
            <motion.div key={card.title} variants={staggerItem}>
              <AboutCard
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 lg:mt-26"
      >
        <div
          className={`relative overflow-hidden rounded-3xl border border-white/10 bg-(--color-secondary) p-3 transition-all duration-300 hover:cursor-pointer ${cardHoverGlow}`}
        >
          <img
            src={images.about}
            alt="Members training at Iron Peak gym"
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default About;
