import HeroText from "./HeroText";
import HeroPic from "./HeroPic";


const HeroMain = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-dark/80 to-black/90 z-0" />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-6 py-20 gap-10 rounded-3xl shadow-2xl bg-white/5 backdrop-blur-md border border-white/10">
        <HeroText />
        <HeroPic />
      </div>
    </section>
  );
};

export default HeroMain;
