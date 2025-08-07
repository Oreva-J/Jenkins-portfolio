import { GiHamburgerMenu } from "react-icons/gi";

const NavbarToggler = ({ toggleMenu }) => {
  return (
    <button
      className="text-2xl p-3 border border-orange rounded-full"
      onClick={toggleMenu}
    >
      <GiHamburgerMenu />
    </button>
  );
};

export default NavbarToggler;
