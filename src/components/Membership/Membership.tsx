import { motion } from "motion/react";
import AnimatedSection from "../AnimatedSection";
import SectionIntro from "../SectionIntro";
import MembershipCard from "./MembershipCard";
import { staggerContainer, staggerItem } from "../motionVariants";

const membershipPlans = [
  {
    title: "Essential",
    description: "Everything you need to get started on your fitness journey.",
    price: "$29",
    buttonLabel: "Choose Essential",
    items: [
      "Full gym floor access",
      "Locker room & showers",
      "2 group classes / week",
      "Mobile workout tracker",
    ],
  },
  {
    title: "Pro",
    description: "Our most popular plan for committed members who want more.",
    price: "$59",
    buttonLabel: "Choose Pro",
    isPopular: true,
    items: [
      "Everything in Essential",
      "Unlimited group classes",
      "2 personal training sessions / month",
      "Custom nutrition guidance",
      "24/7 facility access",
    ],
  },
  {
    title: "Elite",
    description: "The ultimate experience with full personalized coaching.",
    price: "$99",
    buttonLabel: "Choose Elite",
    items: [
      "Everything in Pro",
      "Weekly 1-on-1 personal training",
      "Personalized nutrition plan",
      "Recovery & massage sessions",
      "Priority class booking",
    ],
  },
];

const Membership = () => (
  <AnimatedSection>
    <SectionIntro
      eyebrow="Membership"
      title="Plans Built Around You"
      description="Flexible, commitment-free memberships. Upgrade, downgrade, or cancel anytime."
    />

    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="mt-8 grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {membershipPlans.map((plan) => (
        <motion.div key={plan.title} variants={staggerItem}>
          <MembershipCard {...plan} />
        </motion.div>
      ))}
    </motion.div>
  </AnimatedSection>
);

export default Membership;
