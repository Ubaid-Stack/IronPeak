import { navbarLinks } from "../../constants/navLinks";

interface NavLinksProps {
  vertical?: boolean;
  onLinkClick?: () => void;
}

const NavLinks = ({ vertical = false, onLinkClick }: NavLinksProps) => (
  <nav
    className={`flex ${
      vertical ? "flex-col items-start gap-6" : "lg:items-center gap-12"
    } text-sm font-medium text-(--color-text-soft)`}
    aria-label="Main navigation"
  >
    {navbarLinks.map((link) => (
      <a
        key={link.href}
        href={link.href}
        onClick={onLinkClick}
        className="group relative transition-all duration-300 hover:text-(--color-cta-primary)"
      >
        <span>{link.label}</span>
        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-(--color-cta-primary) transition-all duration-300 group-hover:w-full" />
      </a>
    ))}
  </nav>
);

export default NavLinks;
