import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";

const NavbarMain = ({ menuOpen, toggleMenu }) => {
  return (
    <nav className="max-w-[1300px] mx-auto w-full px-4 fixed left-1/2 -translate-x-1/2 z-30 flex gap-4 mt-4">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-dark/80 items-center p-4 rounded-full border border-accent/40 shadow-lg backdrop-blur-xl">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>
      <div className="flex lg:hidden sm:block p-4 bg-dark/80 items-center justify-center rounded-full border border-accent/40 shadow-lg backdrop-blur-xl">
        <NavbarToggler toggleMenu={toggleMenu} />
      </div>
    </nav>
  );
};

export default NavbarMain;
