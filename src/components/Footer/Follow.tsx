import type { IconType } from "react-icons";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { footerHeadingClass } from "../../constants/styles";

interface SocialLink {
  icon: IconType;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaXTwitter, href: "#", label: "X" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

const SocialFollow = () => (
  <div className="space-y-4">
    <h3 className={footerHeadingClass}>Follow Us</h3>

    <div className="flex gap-3">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-(--color-text-soft) transition-all duration-200 hover:border-(--color-cta-primary) hover:text-(--color-cta-primary)"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>

    <p className="text-sm leading-relaxed text-(--color-text-soft)">
      Join our newsletter for tips, programs, and member offers.
    </p>
  </div>
);

export default SocialFollow;
