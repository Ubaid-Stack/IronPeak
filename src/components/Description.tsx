interface Props {
  text?: string;
  className?: string;
}

const Description = ({ text, className = "" }: Props) => (
  <p
    className={`mt-3 block max-w-xl text-base leading-relaxed text-(--color-text-white)/70 md:text-lg xl:text-xl ${className}`}
  >
    {text}
  </p>
);

export default Description;
