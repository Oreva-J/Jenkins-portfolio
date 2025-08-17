import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_ko3hmpt", "template_ahbmmqd", form.current, {
        publicKey: "I6HAT5mUZH7WHabGE",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("Message Sent Succesfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="bg-dark/60 rounded-2xl p-6 shadow-lg border border-accent/10">
      <p className="text-accent font-bold mb-2">{success}</p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-white/10 border border-accent/20 px-4 text-secondary font-body focus:outline-none focus:border-accent transition-all duration-300"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-white/10 border border-accent/20 px-4 text-secondary font-body focus:outline-none focus:border-accent transition-all duration-300"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          type="text"
          name="message"
          rows="7"
          cols="50"
          placeholder="Message"
          required
          className="rounded-lg bg-white/10 border border-accent/20 p-4 text-secondary font-body focus:outline-none focus:border-accent transition-all duration-300"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-accent bg-accent text-dark h-12 font-bold text-lg hover:bg-highlight hover:text-accent transition-all duration-300 font-special shadow-md"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
