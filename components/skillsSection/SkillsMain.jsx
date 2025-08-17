import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import SkillsText from "./SkillsText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SkillsMain = () => {
  return (
    <section id="skills" className="relative py-24 px-4 max-w-6xl mx-auto min-h-[600px] z-10">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-dark via-primary/80 to-black/90 opacity-90 rounded-3xl shadow-2xl" />
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <SkillsText />
      </motion.div>
      <div className="mt-16 hidden lg:block">
        <AllSkills />
      </div>
      <div className="mt-10 block lg:hidden">
        <AllSkillsSM />
      </div>
    </section>
  );
};

export default SkillsMain;
