import React from "react";
import "./header.css";
import {Typewriter} from "react-simple-typewriter";

// Images
import CV from "../../assets/files/abdulrahman.pdf";
import meImg from "../../assets/images/me.png";
import webImg from "../../assets/images/web-design.png";
import penTool from "../../assets/images/pen-tool.png";
import brushPen from "../../assets/images/brush-pen.png";


// Animation
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Header = () => {
  return (
    <>
      <section id="home">
        {/* <!-- stars --> */}
        {/* <div id="orangeStar" className="str1"></div>
        <div id="orangeStar" className="str2"></div>
        <div id="purpleStar" className="str3"></div>
        <div id="purpleStar" className="str4"></div> */}
        {/* <!-- wave effect --> */}
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
        <div className="container">
          <div className="left">
            <h1 data-aos="fade-right">Hi, I'm Abdulrahman Ashraf</h1>
            <h2 data-aos="fade-right">
              I'm a
              <span className="curser">
                <Typewriter
                  words={[
                    "Web Developer",
                    "React.Js Developer",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={150}
                  deleteSpeed={100}
                  delaySpeed={2000}
                />
              </span>
            </h2>
            <div>
            <p data-aos="fade-right">
              I have a one year of experience
              <br />
              Love to share my experiences with people.
            </p>
            </div>
            <a
              href={CV}
              className="cv"
              data-aos="fade-right"
              download="CV.pdf">
              Download CV
            </a>
          </div>

          <div className="right">
            <img src={meImg} className="me" alt="myLogo" data-aos="fade-up" />

            {/* <!-- icons --> */}
            <img src={webImg} className="web" alt="web" data-aos="fade-right" />
            <img
              src={penTool}
              className="vector"
              alt="vector"
              data-aos="fade-right"
            />
            <img
              src={brushPen}
              className="design"
              alt="design"
              data-aos="fade-left"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
