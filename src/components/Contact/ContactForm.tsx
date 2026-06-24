import { PrimaryButton } from "../Buttons";

const ContactForm = () => {
  return (
    <div
      className=" bg-(--color-secondary) p-5 md:p-8 rounded-2xl w-full"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="flex flex-col gap-6">
        {/* Name + Email — side by side on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-(--color-text-soft) text-sm font-medium"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="bg-(--color-surface) border border-white/10 text-(--color-text-white) placeholder:text-(--color-text-soft)/40 rounded-xl px-4 py-3 text-sm outline-none focus:border-(--color-cta-primary) transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-(--color-text-soft) text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="john@example.com"
              className="bg-(--color-surface) border border-white/10 text-(--color-text-white) placeholder:text-(--color-text-soft)/40 rounded-xl px-4 py-3 text-sm outline-none focus:border-(--color-cta-primary) transition-colors duration-200"
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-(--color-text-soft) text-sm font-medium"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Tell us how we can help..."
            className="bg-(--color-surface) border border-white/10 text-(--color-text-white) placeholder:text-(--color-text-soft)/40 rounded-xl px-4 py-3 text-sm outline-none focus:border-(--color-cta-primary) transition-colors duration-200 resize-none"
          />
        </div>

        {/* Submit */}
        <PrimaryButton className="text-md w-full" text="Submit Message" />
      </div>
    </div>
  );
};

export default ContactForm;
