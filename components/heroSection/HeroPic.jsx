import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative h-full flex items-center justify-center"
    >
      <div className="absolute -z-10 flex justify-center items-center animate-pulse left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[400px] w-auto text-accent/30 blur-2xl animate-[spin_20s_linear_infinite]" />
      </div>
      <img
        src="/images/HexaPic.png"
        alt="Oreva Soboss"
        className="max-h-[350px] w-auto rounded-2xl shadow-2xl border-4 border-accent/40 bg-surface/30 backdrop-blur-md"
      />
    </motion.div>
  );
};

export default HeroPic;
