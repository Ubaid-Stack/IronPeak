import { AppLogo } from "../Navbar/Navbar";
import SocialFollow from "./Follow";
import QuickLinks from "./QuickLinks";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="flex flex-col lg:flex-row gap-10 justify-between">

        {/* Logo + Description */}
        <div className="flex flex-col gap-4">
          <AppLogo />
          <p className="text-(--color-text-soft) text-sm lg:w-100 leading-relaxed">
            Push beyond limits and become your strongest self. Expert coaching,
            premium equipment, and a community that lifts each other up — open 24/7.
          </p>
        </div>

        <QuickLinks />
        <SocialFollow />

      </div>

      {/* Bottom bar */}
      <div className="mt-20 pt-6 border-t border-white/10">
        <p className="text-(--color-text-soft) text-xs text-center">
          © 2026 Ironpeak. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;