interface Props {
  text?: string;
  className?: string;
}
const Description = ({ text, className }: Props) => {
  return (
    <div
      className={`block max-w-xl text-base leading-relaxed
            text-(--color-text-white)/70 sm:text-md md:text-lg xl:text-xl mt-3 ${className}`}
    >
      <p>{text}</p>
    </div>
  );
};

export default Description;
