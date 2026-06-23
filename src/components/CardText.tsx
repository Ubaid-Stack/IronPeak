const CardText = ({
  title,
  description,
}: {
  title?: string;
  description: string;
}) => {
  return (
    <div>
      <h4 className="text-xl font-bold text-(--color-text-white)">{title}</h4>
      <p className="mt-1 leading-relaxed text-(--color-text-soft)">
        {description}
      </p>
    </div>
  );
};

export default CardText;
