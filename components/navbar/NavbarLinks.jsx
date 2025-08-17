import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
  <ul className="flex lg:flex-row sm:flex-col gap-6 text-secondary font-body lg:relative sm:absolute sm:top-[120%] text-center left-1/2 -translate-x-1/2 lg:text-md sm:text-xl sm:bg-dark/80 backdrop-blur-lg lg:bg-transparent sm:w-full py-4 rounded-2xl shadow-md border border-accent/20">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              className="cursor-pointer text-secondary hover:text-accent transition-all duration-300 px-2 py-1 rounded-md hover:bg-accent/10"
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-accent w-0 group-hover:w-full h-[2px] rounded transition-all duration-300"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
