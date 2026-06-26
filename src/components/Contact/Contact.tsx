import { Mail, MapPin, PhoneIcon } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import SectionIntro from "../SectionIntro";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import { fadeInScale } from "../motionVariants";
import { motion } from "motion/react";

const contactInfo = [
  {
    title: "Phone",
    name: "+1 (123) 456-7890",
    icon: <PhoneIcon />,
  },
  {
    title: "Email",
    name: "hello@ironpeak.fit",
    icon: <Mail />,
  },
  {
    title: "Address",
    name: "123 Fitness St, Health City, HC 12345",
    icon: <MapPin />,
  },
];

const Contact = () => (
  <AnimatedSection>
    <div className="grid gap-10 lg:grid-cols-2">
      <div>
        <SectionIntro
          eyebrow="Get Started"
          title="Ready to Start Your Fitness Journey?"
          description="Drop us a message and our team will help you find the perfect plan. Your strongest self starts today."
        />
        <div className="mt-8 space-y-2">
          {contactInfo.map((info) => (
            <ContactDetails
              key={info.title}
              title={info.title}
              name={info.name}
              icon={info.icon}
            />
          ))}
        </div>
      </div>

      <motion.div {...fadeInScale} transition={{ ...fadeInScale.transition, delay: 0.15 }}>
        <ContactForm />
      </motion.div>
    </div>
  </AnimatedSection>
);

export default Contact;
