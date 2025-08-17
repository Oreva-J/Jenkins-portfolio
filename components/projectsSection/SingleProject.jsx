import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}
    >
      <div className="flex-1 flex flex-col gap-2">
        <h2 className="md:text-3xl sm:text-2xl text-accent font-bold font-special mb-1">{name}</h2>
        <h2
          className={`text-lg font-thin text-secondary font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-base flex gap-2 items-center text-highlight hover:text-accent transition-all duration-300 cursor-pointer sm:justify-self-center ${
            align === "left" ? "md:justify-self-end" : "md:justify-self-start"
          }`}
        >
          View <BsFillArrowUpRightCircleFill />
        </a>
      </div>
      <div className="flex-1 max-h-[220px] max-w-[400px] rounded-2xl overflow-hidden hover:scale-105 transform transition-all duration-300 relative border-2 border-accent/30 shadow-xl bg-white/10 backdrop-blur-md">
        <img src={image} alt="website image" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-accent/10 opacity-0 hover:opacity-100 transition-all duration-300" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
