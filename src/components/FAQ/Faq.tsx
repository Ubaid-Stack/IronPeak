import { useState } from "react";
import AnimatedSection from "../AnimatedSection";
import SectionIntro from "../SectionIntro";
import FaqCard from "./FaqCard";
import faqData from "./FaqData";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AnimatedSection>
      <SectionIntro
        eyebrow="FAQ"
        title="Questions? Answered."
        description="Everything you need to know before joining the Iron Peak community."
      />

      <div className="mt-8">
        {faqData.map((faq, index) => (
          <FaqCard
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Faq;
