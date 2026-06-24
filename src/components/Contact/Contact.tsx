import { Mail, MapPin, PhoneIcon } from "lucide-react";
import ContactDetails from "./ContactDetails";
import SectionHeading from "../SectionHeading";
import Description from "../Description";
import Heading from "../heading";

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

const Contact = () => {
  return (
    <section>
      <SectionHeading title="Get Started" />
      <Heading text="Ready to Start Your Fitness Journey?" />
      <Description text="Drop us a message and our team will help you find the perfect plan. Your strongest self starts today." />
      {contactInfo.map((info, index) => (
        <ContactDetails
          key={index}
          title={info.title}
          name={info.name}
          icon={info.icon}
        />
      ))}
    </section>
  );
};

export default Contact;
