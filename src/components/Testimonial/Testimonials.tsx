import { motion } from "motion/react";
import { sectionGrid } from "../../constants/styles";
import AnimatedSection from "../AnimatedSection";
import SectionIntro from "../SectionIntro";
import TestimonialCard from "./TestimonialCard";
import { testimonialData } from "./data";
import { staggerContainer, staggerItem } from "../motionVariants";

const Testimonials = () => (
  <AnimatedSection>
    <SectionIntro
      eyebrow="Success Stories"
      title="Real Members. Real Results."
      description="Don't just take our word for it — hear from the people transforming their lives at Iron Peak."
    />

    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className={sectionGrid}
    >
      {testimonialData.map((testimonial) => (
        <motion.div key={testimonial.name} variants={staggerItem}>
          <TestimonialCard
            name={testimonial.name}
            review={testimonial.review}
          />
        </motion.div>
      ))}
    </motion.div>
  </AnimatedSection>
);

export default Testimonials;
