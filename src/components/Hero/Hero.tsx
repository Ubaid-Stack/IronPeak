import { GhostButton, PrimaryButton } from "../Buttons";
import Description from "../Description";
import heroImage from "../../assets/hero.png";

const Hero = () => {
  return (
    <section className="mt-28 md:mt-35 px-6 lg:px-12 [background:var(--gradient-hero)]">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 max-w-7xl mx-auto">
        {/* Text column */}
        <div className="flex flex-col gap-4 lg:w-1/2">
          <h1 className="text-4xl font-extrabold leading-[0.95] text-(--color-text-white) sm:text-5xl md:text-6xl xl:text-7xl lg:mt-8">
            UNLOCK YOUR <br />
            <span className="text-(--color-cta-primary)">STRONGEST</span> <br />
            VERSION
          </h1>
          <Description
            text="Join a community dedicated to helping you achieve your fitness goals through expert coaching, modern equipment, and personalized training programs."
            className="block max-w-xl text-base leading-relaxed
            text-(--color-text-white)/70 sm:text-lg md:text-xl xl:text-2xl mt-2"
          />
          <div className="flex flex-col gap-4 mt-3 md:flex-row">
            <PrimaryButton text="Start Today" />
            <GhostButton text="View Programs" />
          </div>
        </div>

        {/* Image column */}
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-(--color-cta-primary)/30 blur-3xl rounded-full scale-[0.8]" />
            <img
              src={heroImage}
              alt="Athlete mid-lift in the gym"
              fetchPriority="high"
              className="relative w-55 sm:w-64 lg:w-70 xl:w-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;