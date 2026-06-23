import Description from "../Description";
import Heading from "../heading";
import SectionHeading from "../SectionHeading";
import FaqCard from "./FaqCard";
import faqData from "./FaqData";
import { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section>
      <SectionHeading title="FAQ" />
      <Heading text="Questions? Answered." />
      <Description text="Everything you need to know before joining the Iron Peak community." />
      {faqData.map((faq, index) => (
        <FaqCard
          key={faq.question}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </section>
  );
};

export default Faq;
