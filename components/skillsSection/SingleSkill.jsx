const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="group relative flex flex-col items-center gap-2">
      <div className="bg-surface/20 text-accent h-24 w-24 flex items-center justify-center rounded-2xl border-2 border-accent/40 shadow-lg text-5xl transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/20 group-hover:text-highlight">
        {imgSvg}
      </div>
      <p className="text-secondary font-bold text-lg mt-2 group-hover:text-accent transition-all duration-300">{text}</p>
      <div className="absolute inset-0 rounded-2xl bg-accent/10 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />
    </div>
  );
};

export default SingleSkill;
