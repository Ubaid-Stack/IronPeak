interface Props {
  items: string[];
  icon: React.ReactNode;
}

const IncludesDetails = ({ items, icon }: Props) => {
  return (
    <div className="mt-5 flex flex-col gap-5">
      {items.map((text, index) => (
        <div key={index} className="flex items-center gap-2.5">
          <span className="bg-(--color-cta-primary)/10 rounded-full w-5 h-5 flex items-center justify-center shrink-0">{icon}</span>
          <span className="text-(--color-text-white) text-sm">{text}</span>
        </div>
      ))}
    </div>
  );
};

export default IncludesDetails;