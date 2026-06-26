import { motion, type HTMLMotionProps } from "motion/react";
import { fadeInUp } from "./motionVariants";

interface AnimatedSectionProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedSection = ({
  children,
  delay = 0,
  className,
  ...props
}: AnimatedSectionProps) => (
  <motion.div
    {...fadeInUp}
    transition={{ ...fadeInUp.transition, delay }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;
