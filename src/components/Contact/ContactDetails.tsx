interface Props {
  title: string;
  name: string;
  icon: React.ReactNode;
}

const ContactDetails = ({ title, name, icon }: Props) => {
  return (
    <div className="flex gap-4 mt-5 items-center">
      <div className="w-12 h-12 bg-(--color-cta-primary)/5 flex items-center justify-center rounded-lg text-(--color-cta-primary)">
        {icon}
      </div>
      <div className="flex flex-col">
        <h3 className="text-sm text-white/60">{title}</h3>
        <p className="text-lg font-semibold text-white">
          {name}
        </p>
      </div>
    </div>
  );
};

export default ContactDetails;
