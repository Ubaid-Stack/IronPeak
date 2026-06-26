import { motion } from "motion/react";
import {
  ArrowRight,
  Award,
  Calendars,
  Dumbbell,
  Rocket,
  UsersRound,
} from "lucide-react";
import heroImage from "../../assets/gp.png";
import { GhostButton, PrimaryButton } from "../Buttons";
import Description from "../Description";
import StatCard from "../StatCard";
import { staggerContainer, staggerItem } from "../motionVariants";

const Hero = () => (
  <div>
    <div className="mx-auto flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12">
      <div className="flex flex-col gap-4 lg:w-1/2">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl leading-[0.95] font-extrabold text-(--color-text-white) sm:text-5xl xl:text-7xl"
        >
          Unlock Your <br />
          <span className="text-(--color-cta-primary)">Strongest</span>
          <br />
          Version
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Description text="Join a community dedicated to helping you achieve your fitness goals through expert coaching, modern equipment, and personalized training programs." />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-3 flex flex-col gap-4 md:flex-row"
        >
          <PrimaryButton text="Start Today" icon={<Rocket />} />
          <GhostButton
            text="View Programs"
            icon={<ArrowRight />}
            className="px-6 py-3"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex items-center justify-center lg:w-1/2"
      >
        <img
          src={heroImage}
          alt="Athlete mid-lift in the gym"
          fetchPriority="high"
          className="relative w-full max-w-100 xl:max-w-160"
        />
      </motion.div>
    </div>

    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="mx-auto mt-12 grid grid-cols-2 gap-3 md:grid-cols-4"
    >
      {[
        { icon: <UsersRound />, title: "Members", value: "1,200+" },
        { icon: <Award />, title: "Certified Trainers", value: "25+" },
        { icon: <Calendars />, title: "Years Experience", value: "15+" },
        { icon: <Dumbbell />, title: "Gym Access", value: "24/7" },
      ].map((stat) => (
        <motion.div key={stat.title} variants={staggerItem}>
          <StatCard icon={stat.icon} title={stat.title} value={stat.value} />
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default Hero;
