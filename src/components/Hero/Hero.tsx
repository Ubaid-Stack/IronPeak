import { GhostButton, PrimaryButton } from "../Buttons";
import Description from "../Description";
import heroImage from "../../assets/hero-image.png";
import { ArrowRight, Award, Calendars, Dumbbell, Rocket, UsersRound } from "lucide-react";
import StatCard from "../StatCard";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 mx-auto items-center">
        {/* Text column */}
        <div className="flex flex-col gap-4 lg:w-1/2">
          <h1 className="text-4xl font-extrabold leading-[0.95] text-(--color-text-white) sm:text-5xl md:text-5xl xl:text-7xl ">
            Unlock Your <br />
            <span className="text-(--color-cta-primary)">Strongest</span>
            <br />
            Version
          </h1>
          <Description text="Join a community dedicated to helping you achieve your fitness goals through expert coaching, modern equipment, and personalized training programs." />
          <div className="flex flex-col gap-4 mt-3 md:flex-row">
            <PrimaryButton text="Start Today" icon={<Rocket />} />
            <GhostButton text="View Programs" icon={<ArrowRight />} />
          </div>
        </div>

        {/* Image column */}
        <div className="flex justify-center items-center lg:w-1/2">
          <img
            src={heroImage}
            alt="Athlete mid-lift in the gym"
            fetchPriority="high"
            className="relative md:w-90 lg:w-100 xl:w-110"
          />
        </div>
      </div>
      <div className=" mx-auto mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 ">
        <StatCard icon={<UsersRound />} title="Members" value="1,200+" />
        <StatCard icon={<Award />} title="Certified Trainer" value="25+" />
        <StatCard icon={<Calendars />} title="Years Experience" value="15+" />
        <StatCard icon={<Dumbbell />} title="Gym Access" value="24/7" />
      </div>
    </section>
  );
};

export default Hero;
