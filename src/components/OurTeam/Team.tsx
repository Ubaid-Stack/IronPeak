import Description from "../Description";
import Heading from "../heading";
import ProgramCard from "../Program/ProgramCard";
import SectionHeading from "../SectionHeading";
import teamMember from "./index";
const Team = () => {
  return (
    <section>
      <SectionHeading title="Meet the Team" />
      <Heading text="Coaches Who Care" />
      <Description text="Certified, passionate professionals dedicated to helping you train safely and reach your full potential." />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
        {teamMember.map((member, index) => (
          <ProgramCard
            src={member.image}
            alt={member.alt}
            key={index}
            title={member.name}
            description={member.specialty}
            role={member.role}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
