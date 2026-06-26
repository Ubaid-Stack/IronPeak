import { AppLogo } from "../Navbar/Navbar";
import SocialFollow from "./Follow";
import QuickLinks from "./QuickLinks";

const Footer = () => (
  <footer className="w-full">
    <div className="flex flex-col justify-between gap-10 lg:flex-row">
      <div className="flex flex-col gap-4">
        <AppLogo />
        <p className="max-w-100 text-sm leading-relaxed text-(--color-text-soft)">
          Push beyond limits and become your strongest self. Expert coaching,
          premium equipment, and a community that lifts each other up — open
          24/7.
        </p>
      </div>

      <QuickLinks />
      <SocialFollow />
    </div>

    <div className="mt-20 border-t border-white/10 pt-8">
      <p className="text-center text-xs text-(--color-text-soft)">
        © 2026 Iron Peak. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
