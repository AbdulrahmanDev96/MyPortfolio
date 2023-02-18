import {React, useState} from "react";
import {FaGithub, FaFacebookF, FaPhone, FaLinkedin} from "react-icons/fa";
import "./contact.css";
import MessagesForm from "./MessagesForm";

const Contact = () => {
  const [bgIcon, setBgIcon] = useState(null);
  return (
    <section id="contact">
      {/* BG Icon */}
      <FaLinkedin
        className={`bg-icon ${bgIcon === "linkedin" ? "vesible" : ""}`}
      />
      <FaGithub className={`bg-icon ${bgIcon === "github" ? "vesible" : ""}`} />

      <FaFacebookF
        className={`bg-icon ${bgIcon === "facebook" ? "vesible" : ""}`}
      />
      <FaPhone className={`bg-icon ${bgIcon === "phone" ? "vesible" : ""}`} />
      <div className="container">
        <div className="top">
          <h1>Contact</h1>
          <p>Lets Say Hi!</p>
        </div>
        <div className="cont">
          <div className="links" data-aos="zoom-out-right" data-aos-delay="100">
            {/* <!-- Github --> */}
            <a
              href="https://github.com/AbdulrahmanDev96"
              target="blank"
              onMouseEnter={() => setBgIcon("github")}
              onMouseLeave={() => setBgIcon(null)}>
              <FaGithub className="i" />
            </a>
            {/* <!-- Linkedin --> */}
            <a
              href="https://www.linkedin.com/in/abdulrahman-ashraf-92568921b/"
              target="blank"
              onMouseEnter={() => setBgIcon("linkedin")}
              onMouseLeave={() => setBgIcon(null)}>
              <FaLinkedin className="i" />
            </a>
            {/* <!-- facebook --> */}
            <a
              href="https://web.facebook.com/profile.php?id=100023767250561&_rdc=1&_rdr"
              target="blank"
              onMouseEnter={() => setBgIcon("facebook")}
              onMouseLeave={() => setBgIcon(null)}>
              <FaFacebookF className="i" />
            </a>
            {/* <!-- phone --> */}
            <a
              href="https://wa.me/201154449211"
              target="blank"
              onMouseEnter={() => setBgIcon("phone")}
              onMouseLeave={() => setBgIcon(null)}>
              <FaPhone className="i" />
            </a>
          </div>
          <MessagesForm/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
