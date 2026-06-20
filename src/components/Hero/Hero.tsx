import { GhostButton, PrimaryButton } from "../Buttons";
import Description from "../Description";
import heroImage from "../../assets/hero.png";

const Hero = () => {
  return (
    <section>
      <div className="mt-28 lg:mt-35 flex flex-col lg:flex-row items-center lg:justify-between gap-10 lg:gap-12">
        {/* Text column */}
        <div className="flex flex-col justify-center gap-4 lg:w-1/2">
          <h1 className="text-4xl font-extrabold leading-[0.95] tracking-tight text-(--color-text-white) sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            UNLOCK YOUR <br />
            <span className="text-(--color-cta-primary)">STRONGEST</span> <br />
            VERSION
          </h1>
          <Description
            text="Discover the power of your potential with our cutting-edge fitness solutions."
            className="block max-w-xl text-base leading-relaxed 
            text-(--color-text-white)/70 sm:text-lg md:text-xl lg:text-xl mt-2"
          />
          <div className="flex flex-col gap-4 md:flex-row">
            <PrimaryButton text="Start Today" />
            <GhostButton text="View Programs" />
          </div>
        </div>

        {/* Image column */}
        <div className="flex items-center justify-center w-full lg:w-1/2 border border-amber-100">
          <div className="relative">
            <div className="absolute inset-0 bg-(--color-cta-primary)/30 blur-3xl rounded-full scale-80" />
            <img
              src={heroImage}
              alt="Hero Image"
              className="w-55 lg:w-auto lg:max-w-md relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
