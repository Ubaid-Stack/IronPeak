interface HeadingProps {
  text: string;
}

const Heading = ({ text }: HeadingProps) => (
  <h2 className="mt-3 text-2xl font-bold text-(--color-text-white) md:text-3xl lg:text-4xl">
    {text}
  </h2>
);

export default Heading;
