import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="top">
          <div className="right">
            <h1>DON'T BE SHY !</h1>

            <p>
              Feel free to get in touch with me. <br />I am always open to
              discussing
              <br />
              new projects, creative ideas or
              <br />
              opportunities to be part of your visions.
            </p>
          </div>
          {/* <img src={logo} className="logo" alt="logo" /> */}
          <div className="left">
            <h1>Who am i ?</h1>
            <p>
              I'm a web developer, and I'm very passionate
              <br />
              and dedicated to my work, I <br />
              have acquired the skills and knowledge
              <br /> necessary to make your project a success.
            </p>
          </div>
        </div>
        <div className="bottom"> 2023 Abdulrahman Ashraf</div>
      </footer>
    </>
  );
};

export default Footer;
