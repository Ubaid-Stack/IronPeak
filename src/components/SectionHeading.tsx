const SectionHeading = ({ title }: { title: string }) => {
  return (
    <div className="w-fit">
      <h2 className="text-md font-semibold text-center text-(--color-cta-primary)">{title}</h2>
    </div>
  );
};

export default SectionHeading;
