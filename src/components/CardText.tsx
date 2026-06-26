const CardText = ({
  title,
  description,
}: {
  title?: string;
  description: string;
}) => (
  <div>
    {title && (
      <h4 className="text-xl font-bold text-(--color-text-white)">{title}</h4>
    )}
    <p
      className={`leading-relaxed text-(--color-text-soft) ${title ? "mt-1" : ""}`}
    >
      {description}
    </p>
  </div>
);

export default CardText;
