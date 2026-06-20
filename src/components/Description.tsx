interface Props {
  text: string;
  className?: string;
}
const Description = ({ text, className }: Props) => {
  return (
    <div className={className}>
      <p>{text}</p>
    </div>
  );
};

export default Description;
