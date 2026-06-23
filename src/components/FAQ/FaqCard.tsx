interface Props {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItem = ({ question, answer, isOpen, onToggle }: Props) => {
  return (
    <div className="mt-6">
      <div className="mb-4 rounded-xl border border-white/10 bg-(--color-secondary) transition-all duration-300 hover:border-(--color-cta-primary)">
        <button
          onClick={onToggle}
          className="flex w-full items-center justify-between p-4 text-left hover:cursor-pointer"
        >
          <h3 className="text-lg font-semibold text-(--color-text-white)">
            {question}
          </h3>
          <span className="text-2xl text-(--color-text-white)">
            {isOpen ? "−" : "+"}
          </span>
        </button>
        {isOpen && (
          <div className="px-4 pb-4">
            <p className="text-(--color-text-soft)">{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FaqItem;
