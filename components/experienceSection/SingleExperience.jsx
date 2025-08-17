import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="md:h-[350px] md:w-[260px] sm:h-auto sm:w-full bg-white/5 backdrop-blur-lg border border-accent/30 rounded-2xl p-6 shadow-xl flex flex-col gap-2 transition-all duration-300 hover:scale-105 hover:border-accent/80"
    >
      <p className="font-bold text-accent text-lg mb-1">{experience.job}</p>
      <p className="text-highlight font-semibold mb-1">{experience.company}</p>
      <p className="text-secondary text-sm mb-2">{experience.date}</p>
      <ul className="list-disc mt-2 pl-4 text-secondary text-base">
        {experience.responsibilities.map((resp, index) => {
          return <li key={index}>{resp}</li>;
        })}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
