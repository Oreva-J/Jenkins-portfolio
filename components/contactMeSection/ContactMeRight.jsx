import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="bg-accent/10 rounded-2xl p-4 shadow-md mb-2">
        <img
          src="/images/email-image.png"
          alt="email image"
          className="max-w-[220px]"
        />
      </div>
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
