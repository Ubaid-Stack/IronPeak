interface Props {
  text: string;
  className?: string;
}
const Description = ({ text, className }: Props) => {
  return (
    <div
      className={`block max-w-xl text-base leading-relaxed
            text-(--color-text-white)/70 sm:text-lg md:text-xl xl:text-2xl mt-2 ${className}`}
    >
      <p>{text}</p>
    </div>
  );
};

export default Description;
