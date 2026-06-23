import Description from "../Description";
import Heading from "../heading";
import SectionHeading from "../SectionHeading";
import MembershipCard from "./MembershipCard";

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

const Membership = () => {
  return (
    <section>
      <SectionHeading title="Membership" />
      <Heading text="Plans Built Around You" />
      <Description text="Flexible, commitment-free memberships. Upgrade, downgrade, or cancel anytime." />

      <div className="mt-8 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-6 items-center">
        {membershipPlans.map((plan) => (
          <MembershipCard key={plan.title} {...plan} />
        ))}
      </div>
    </section>
  );
};

export default Membership;
