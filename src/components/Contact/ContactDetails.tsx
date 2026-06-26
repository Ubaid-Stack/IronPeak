interface Props {
  title: string;
  name: string;
  icon: React.ReactNode;
}

const ContactDetails = ({ title, name, icon }: Props) => (
  <div className="mt-4 flex items-center gap-4 first:mt-0">
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-(--color-cta-primary)/5 text-(--color-cta-primary)">
      {icon}
    </div>
    <div className="flex flex-col">
      <h3 className="text-sm font-medium text-white/60">{title}</h3>
      <p className="text-lg font-medium text-white">{name}</p>
    </div>
  </div>
);

export default ContactDetails;
