import AllExperiences from "./AllExperiences";
import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ExperienceMain = () => {
  return (
    <section id="experience" className="relative py-24 px-4 max-w-6xl mx-auto z-10">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-dark via-primary/80 to-black/90 opacity-90 rounded-3xl shadow-2xl" />
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ExperienceText />
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ExperienceTop />
      </motion.div>
      <div className="w-full h-1 mt-4 bg-accent/40 rounded-full lg:block sm:hidden"></div>
      <AllExperiences />
    </section>
  );
};

export default ExperienceMain;
