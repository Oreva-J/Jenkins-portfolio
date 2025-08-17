import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-6 h-full justify-center md:text-left sm:text-center max-w-xl">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase tracking-widest text-secondary font-special drop-shadow-md"
      >
        Full-Stack Web Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-5xl lg:text-7xl sm:text-4xl font-extrabold uppercase text-highlight font-special drop-shadow-lg"
      >
        Oreva <span className="text-accent">Soboss</span>
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-muted font-body bg-dark/60 rounded-xl px-4 py-3 shadow-md border border-white/10"
      >
        Creative developer & instructor passionate about building beautiful, performant web experiences.<br />
        <span className="text-accent font-semibold">Let’s build something amazing together.</span>
      </motion.p>
    </div>
  );
};

export default HeroText;
