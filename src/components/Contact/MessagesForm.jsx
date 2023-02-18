import {React, useRef, useState} from "react";
import emailjs from "@emailjs/browser";

const MessagesForm = () => {
  const [pending, setPending] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setPending(true);
    emailjs
      .sendForm(
        "service_ajg0mdi",
        "template_nsdkwtc",
        form.current,
        "WhsZPP0XQUP9ACK5o"
      )
      .then(
        (result) => {
          setPending(false);
          alert("I received your message!");
          form.current.reset();
        },
        (error) => {
          setPending(false);
          alert("Sorry, there was some error");
          form.current.reset();
        }
      );
  };
  return (
    <>
      <form className="form" ref={form} onSubmit={sendEmail}>
        <div className={`message-sent "vesible" `}>
          <h1>Message Sent</h1>
        </div>
        <div className="input-container">
          <input
            id="firstname"
            className={`input "error"  `}
            type="text"
            placeholder=" "
            name="name"
            required
          />
          <div className="cut"></div>
          <label htmlFor="firstname" className="placeholder">
            Full Name
          </label>
        </div>
        <div className="input-container">
          <input
            id="email"
            className={`input "error"`}
            type="email"
            placeholder=" "
            name="email"
            required
          />
          <div className="cut cut-short"></div>
          <label htmlFor="email" className="placeholder email">
            Email
          </label>
        </div>
        <div className="input-container">
          <textarea
            id="message"
            className={`input  "error"`}
            placeholder=" "
            name="message"
            required
          />
          <div className="cut"></div>
          <label htmlFor="message" className="placeholder">
            Message
          </label>
        </div>
        <button
          type="text"
          className="submit"
          disabled={pending ? true : false}>
          {pending ? "Loading..." : "Send Message"}
        </button>
      </form>
    </>
  );
};

export default MessagesForm;
