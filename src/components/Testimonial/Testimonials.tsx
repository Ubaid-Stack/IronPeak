import Description from "../Description";
import SectionHeading from "../SectionHeading";
import Heading from "../heading";
import TestimonialCard from "./TestimonialCard";
import { testimonialData } from "./data";

const Testimonials = () => {
  return (
    <section className="">
      <SectionHeading title="Success Stories" />
      <Heading text="Real Members. Real Results." />
      <Description text="Don't just take our word for it — hear from the people transforming their lives at Iron Peak." />
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonialData.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            name={testimonial.name}
            review={testimonial.review}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
