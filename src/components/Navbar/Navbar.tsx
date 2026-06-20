import logo from "../../assets/logo.png";
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
  return (
    <div className="flex items-center justify-between">
      <AppLogo />
    </div>
  );
};

export default Navbar;
