import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const AboutMeMain = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col md:flex-row gap-12 px-6 max-w-6xl mx-auto mt-32 justify-between items-center z-10"
    >
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="flex-1"
      >
        <AboutMeText />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="flex-1 flex justify-center"
      >
        <AboutMeImage />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-dark via-primary/80 to-black/90 opacity-90 rounded-3xl shadow-2xl" />
    </section>
  );
};

export default AboutMeMain;
