import { footerLinks } from "../../constants/navLinks";
import { footerHeadingClass } from "../../constants/styles";

const QuickLinks = () => (
  <div className="flex flex-col gap-4">
    <h3 className={footerHeadingClass}>Quick Links</h3>

    <ul className="grid grid-cols-1 gap-y-3 md:grid-cols-3 lg:grid-cols-2 lg:gap-x-12">
      {footerLinks.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="text-sm text-(--color-text-soft) transition-colors duration-200 hover:text-(--color-cta-primary)"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default QuickLinks;
