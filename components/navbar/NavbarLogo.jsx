
const NavbarLogo = () => {
  return (
    <div className="flex items-center gap-2 select-none">
      <span className="inline-block w-8 h-8 rounded-full bg-accent/80 shadow-lg border-2 border-highlight flex items-center justify-center font-special font-extrabold text-lg text-dark">OS</span>
      <h1 className="text-highlight font-special font-extrabold text-2xl tracking-widest hidden sm:hidden md:block lg:block">OREVA SOBOSS</h1>
      <h1 className="text-highlight font-special font-extrabold text-3xl md:hidden sm:block">OS</h1>
    </div>
  );
};

export default NavbarLogo;
