import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className="px-5 py-2 rounded-full text-lg font-bold font-special text-dark bg-accent shadow-lg border border-highlight flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:bg-highlight hover:text-accent cursor-pointer">
      <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
        Hire Me
      </Link>
      <span className="hidden md:inline-block">
        <LuArrowDownRight />
      </span>
    </button>
  );
};

export default NavbarBtn;
