interface SectionHeadingProps {
  title: string;
}

const SectionHeading = ({ title }: SectionHeadingProps) => (
  <p className="w-fit text-base font-semibold text-(--color-cta-primary)">
    {title}
  </p>
);

export default SectionHeading;
