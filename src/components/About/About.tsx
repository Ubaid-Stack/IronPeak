import { BadgeCheck, Cpu, Target } from "lucide-react";
import Description from "../Description";
import Heading from "../heading";
import SectionHeading from "../SectionHeading";
import AboutCard from "./AboutCard";
import aboutImage from "../../assets/about.avif";

const About = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
        {/* Left content */}
        <div className="flex-1">
          <SectionHeading title="About Us" />
          <Heading text="Empowering Your Digital Journey with IronPeak" />
          <Description text="Iron Peak is a community built around results. From world-class equipment to coaches who genuinely care, every detail is designed to help you train smarter, recover better, and reach goals you didn't think were possible." />

          <div className="mt-8 space-y-4">
            <AboutCard
              title="Certified Coaches"
              description="Trained, accredited professionals in every discipline."
              icon={<BadgeCheck />}
            />
            <AboutCard
              title="Premium Equipment"
              description="High-quality gear designed for peak performance."
              icon={<Cpu />}
            />
            <AboutCard
              title="Personalized Plans"
              description="Programs built around your unique goals."
              icon={<Target />}
            />
          </div>
        </div>

        {/* Right image only on lg */}
        <div className="flex-1 lg:mt-26">
          <div
            className="
            relative overflow-hidden rounded-3xl
            border border-white/10
            bg-(--color-secondary)
            p-3
            transition-all duration-300
            hover:border-(--color-cta-primary)/30
            hover:shadow-(--shadow-glow)
            "
          >
            <img
              src={aboutImage}
              alt="About IronPeak"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
