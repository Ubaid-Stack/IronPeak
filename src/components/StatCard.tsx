interface Props {
  icon: React.ReactNode;
  title: string;
  value: number | string;
}

const StatCard = ({ icon, title, value }: Props) => {
  return (
    <div
      className="
        group
        flex flex-col items-center gap-4
        rounded-2xl
        p-5
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-(--shadow-card)
        transition-all duration-300
        hover:-translate-y-1
        hover:border-(--color-cta-primary)/30
        hover:shadow-(--shadow-glow)
      "
    >
      <div
        className="
          flex items-center justify-center
          rounded-full p-3 text-2xl
          bg-[rgb(212_255_71/0.1)]
          text-(--color-cta-primary)
          transition-all duration-300
          group-hover:bg-[rgb(212_255_71/0.2)]
          group-hover:scale-110
        "
      >
        {icon}
      </div>

      <div className="text-center">
        <p className="text-3xl font-bold text-(--color-text-white)">{value}</p>
        <h4 className="mt-3 text-sm text-(--color-text-soft)">{title}</h4>
      </div>
    </div>
  );
};

export default StatCard;
