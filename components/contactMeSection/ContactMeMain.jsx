import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <section
      id="contact"
      className="relative py-24 px-4 max-w-6xl mx-auto z-10"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-dark via-primary/80 to-black/90 opacity-90 rounded-3xl shadow-2xl" />
      <h2 className="text-4xl md:text-5xl font-special font-extrabold text-accent mb-10 text-center tracking-wide">Contact Me</h2>
      <div className="flex justify-between gap-16 bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-accent/20 shadow-xl lg:flex-row sm:flex-col">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </section>
  );
};

export default ContactMeMain;
