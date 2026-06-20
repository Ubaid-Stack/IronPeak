interface NavLinksProps {
  vertical?: boolean;
  onLinkClick?: () => void;
}

const NavLinks = ({ vertical = false, onLinkClick }: NavLinksProps) => {
  const links = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Programs", href: "#" },
    { label: "Trainers", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <div
      className={`flex ${
        vertical ? "flex-col items-start gap-6" : "lg:items-center gap-8"
      } text-(--color-text-soft) font-medium text-sm `}
    >
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          onClick={onLinkClick}
          className="relative transition-all duration-300 hover:text-(--color-cta-primary) group"
        >
          <span>{link.label}</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-(--color-cta-primary) transition-all duration-300 group-hover:w-full"></span>
        </a>
      ))}
    </div>
  );
};

export default NavLinks;
