import { Link } from "react-scroll";

const FooterMain = () => {
  const footerLinks = [
    {
      name: "About Me",
      section: "about",
    },
    {
      name: "Skills",
      section: "skills",
    },
    {
      name: "Experience",
      section: "experience",
    },
    {
      name: "Projects",
      section: "projects",
    },
  ];
  return (
    <footer className="px-4">
      <div className="w-full h-[2px] bg-accent/30 mt-24 rounded-full"></div>
      <div className="md:flex justify-between items-center mt-6 max-w-6xl mx-auto sm:hidden bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow border border-accent/10">
        <p className="text-2xl font-special font-bold text-accent tracking-widest">Oreva Soboss</p>
        <ul className="flex gap-6 text-secondary text-lg font-body">
          {footerLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  to={item.section}
                  className="hover:text-accent transition-all duration-300 cursor-pointer px-2 py-1 rounded-md hover:bg-accent/10"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-6xl mx-auto text-right mt-4 mb-10 text-xs text-accent/60 font-body">
        © 2025 Oreva Soboss | All Rights Reserved.
      </p>
    </footer>
  );
};

export default FooterMain;
