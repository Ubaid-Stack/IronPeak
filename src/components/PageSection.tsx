import Container from "./Container";

type SectionVariant = "hero" | "alt" | "default" | "footer";

interface PageSectionProps {
  id?: string;
  variant?: SectionVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<SectionVariant, string> = {
  hero: "[background:var(--gradient-hero)] pt-28 pb-16 md:pb-20",
  alt: "bg-(--color-secondary) py-16 md:py-20",
  default: "py-16 md:py-20",
  footer: "py-16 md:py-20 border-t border-white/10",
};

const PageSection = ({
  id,
  variant = "default",
  children,
  className = "",
}: PageSectionProps) => (
  <section id={id} className={`${variantClasses[variant]} ${className}`}>
    <Container>{children}</Container>
  </section>
);

export default PageSection;
