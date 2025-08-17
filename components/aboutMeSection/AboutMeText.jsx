import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-accent/20 max-w-xl">
      <h2 className="text-4xl md:text-5xl font-special font-extrabold text-accent mb-6 tracking-wide">About Me</h2>
      <p className="text-lg text-secondary mb-6 font-body">
        I’m <span className="text-highlight font-semibold">Oreva</span>, a creative web developer and instructor passionate about building beautiful, performant web experiences. I specialize in React, Next.js, and modern front-end technologies, helping others grow through hands-on learning and real-world projects.<br /><br />
        Outside of coding, I love sharing knowledge, collaborating on open-source, and inspiring others to achieve their tech dreams.
      </p>
      <button className="border border-accent rounded-full py-2 px-6 text-lg flex gap-2 items-center mt-4 hover:bg-accent hover:text-dark transition-all duration-300 cursor-pointer font-special font-bold shadow-md md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
