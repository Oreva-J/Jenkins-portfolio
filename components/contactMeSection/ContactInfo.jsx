import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-3 bg-white/10 rounded-xl p-4 shadow border border-accent/10">
      <SingleInfo text="oreva.soboss@email.com" Image={HiOutlineMail} />
      <SingleInfo text="+234 8000 123 456" Image={FiPhone} />
      <SingleInfo text="Lagos, Nigeria" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
