import Description from "./Description";
import Heading from "./Heading";
import SectionHeading from "./SectionHeading";

interface SectionIntroProps {
  eyebrow: string;
  title: string;
  description: string;
}

const SectionIntro = ({ eyebrow, title, description }: SectionIntroProps) => (
  <>
    <SectionHeading title={eyebrow} />
    <Heading text={title} />
    <Description text={description} />
  </>
);

export default SectionIntro;
