const navLinks = [
  "Home",
  "About",
  "Programs",
  "Membership",
  "Testimonials",
  "Contact",
];

const QuickLinks = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-(--color-text-white) font-bold text-sm tracking-widest uppercase">
        Quick Links
      </h3>

      <ul className="grid grid-cols-1 gap-y-3 md:grid-cols-3 lg:grid-cols-2 lg:gap-x-12">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm text-(--color-text-soft) transition-colors duration-200 hover:text-(--color-cta-primary)"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
