import { useState } from "react";
import logo from "../../assets/logo.png";
import { PrimaryButton } from "../Buttons";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
import { TextAlignJustify } from "lucide-react";

export const AppLogo = () => {
  return (
    <div className="flex items-center">
      <img
        src={logo}
        alt="Ironpeak Logo"
        className="w-10 h-10 object-contain bg-white rounded-full p-1"
      />
      <h1 className="uppercase text-white text-xl font-bold ml-2">Iron peak</h1>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-5">
      <div className="flex items-center justify-between bg-transparent rounded-full px-4 py-3 max-w-7xl mx-auto">
        <AppLogo />

        {/* desktop links — hidden on mobile */}
        <div className="hidden md:flex">
          <NavLinks />
        </div>

        {/* desktop button — hidden on mobile */}
        <div className="hidden md:block">
          <PrimaryButton text="Join Now" />
        </div>

        {/* hamburger button — only on mobile */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-white text-2xl mr-0.5"
          aria-label="Open menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <TextAlignJustify />
        </button>

        <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </header>
  );
};

export default Navbar;
