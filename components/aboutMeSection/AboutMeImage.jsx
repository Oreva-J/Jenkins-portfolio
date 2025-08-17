const AboutMeImage = () => {
  return (
    <div className="relative h-[400px] w-[260px] flex items-center justify-center">
      <div className="absolute inset-0 rounded-3xl bg-accent/20 blur-2xl scale-110 -z-10" />
      <div className="h-[380px] w-[240px] rounded-3xl overflow-hidden shadow-2xl border-4 border-accent/40 bg-surface/20 backdrop-blur-md">
        <img
          src="/images/about-me.jpg"
          alt="About Me Image"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default AboutMeImage;
