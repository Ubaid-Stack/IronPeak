import { useState } from "react";
import logo from "../../assets/logo.png";
import { PrimaryButton } from "../Buttons";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";

const AppLogo = () => {
  return (
    <img
      src={logo}
      alt="Ironpeak Logo"
      className="w-10 h-10 object-contain bg-white rounded-full p-1 "
    />
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between border border-gray-300 bg-transparent rounded-full px-4 py-3 mt-4 fixed left-0 right-0 z-50 mx-5">
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
        ☰
      </button>

      <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Navbar;
