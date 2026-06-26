interface Props {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqCard = ({ question, answer, isOpen, onToggle }: Props) => (
  <div className="mt-4 first:mt-0">
    <div className="rounded-xl border border-white/10 bg-(--color-secondary) transition-all duration-300 hover:border-(--color-cta-primary)">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between p-4 text-left"
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

export default FaqCard;
