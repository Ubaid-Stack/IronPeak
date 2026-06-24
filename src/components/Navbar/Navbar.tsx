import { useState, useEffect } from "react";
import logo from "../../assets/logo3.png";
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
        className="w-10 h-10 object-contain bg-white rounded-xl p-1"
      />
      <h1 className="uppercase text-white text-xl font-bold ml-2">Iron peak</h1>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-4 inset-x-0 z-50 px-5 lg:px-15">
      <div
        className={`border border-white/10 backdrop:backdrop-blur-2xl rounded-xl flex items-center justify-between bg-transparent px-4 py-3 ${scrolled ? "  lg:backdrop-blur-md shadow-lg" : "bg-transparent"}`}
      >
        <AppLogo />

        {/* desktop links — hidden on mobile */}
        <div className="hidden lg:flex">
          <NavLinks />
        </div>

        {/* desktop button — hidden on mobile */}
        <div className="hidden lg:block">
          <PrimaryButton text="Join Now" />
        </div>

        {/* hamburger button — only on mobile */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden text-white text-2xl mr-0.5"
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
