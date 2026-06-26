export interface NavLink {
  label: string;
  href: string;
  showInNavbar: boolean;
  showInFooter: boolean;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home", showInNavbar: true, showInFooter: true },
  { label: "About", href: "#about", showInNavbar: true, showInFooter: true },
  {
    label: "Programs",
    href: "#programs",
    showInNavbar: true,
    showInFooter: true,
  },
  {
    label: "Trainers",
    href: "#team",
    showInNavbar: true,
    showInFooter: false,
  },
  {
    label: "Pricing",
    href: "#membership",
    showInNavbar: true,
    showInFooter: false,
  },
  {
    label: "Membership",
    href: "#membership",
    showInNavbar: false,
    showInFooter: true,
  },
  {
    label: "Testimonials",
    href: "#testimonials",
    showInNavbar: false,
    showInFooter: true,
  },
  {
    label: "Contact",
    href: "#contact",
    showInNavbar: true,
    showInFooter: true,
  },
];

export const navbarLinks = navLinks.filter((link) => link.showInNavbar);
export const footerLinks = navLinks.filter((link) => link.showInFooter);
