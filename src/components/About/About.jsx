import React from "react";
import "./about.css";
// Images
import arLogo from "../../assets/images/arLogo.png";
import ico1 from "../../assets/images/icons/1.png";
import ico2 from "../../assets/images/icons/2.png";
import ico3 from "../../assets/images/icons/3.png";
import ico4 from "../../assets/images/icons/4.png";
import ico5 from "../../assets/images/icons/5.png";
import ico6 from "../../assets/images/icons/6.png";
import ico7 from "../../assets/images/icons/7.png";
import ico8 from "../../assets/images/icons/8.png";
import ico9 from "../../assets/images/icons/9.png";
import ico10 from "../../assets/images/icons/10.png"
// Style
import {useEffect} from "react";
import {useState} from "react";

const About = () => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    setIcons([ico1, ico2, ico3, ico4, ico5, ico6, ico7, ico8, ico9,ico10]);
  }, []);
  return (
    <>
      <section id="about">
        <div className="container">
          {/* <!-- top --> */}
          <div className="top">
            <div className="left" data-aos="fade-right">
              <h1>About me</h1>
              <div className="circle">
                <img src={arLogo} alt="logo" />
              </div>
            </div>
            <div className="right" data-aos="fade-left">
              {/* <!-- skl1 --> */}
              <div className="skl">
                <div className="info">
                  <h3>Web design</h3>
                  <h3>80%</h3>
                </div>
                <div className="bar">
                  <div className="barEvo" id="evo1"></div>
                </div>
              </div>
              {/* <!-- skl2 --> */}
              <div className="skl">
                <div className="info">
                  <h3>Web Application</h3>
                  <h3>75%</h3>
                </div>
                <div className="bar">
                  <div className="barEvo" id="evo2"></div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- middle --> */}
          <div className="middle">
            {Array(10)
              .fill("")
              .map((e, ix) => (
                <div className="icon" key={ix} data-aos={"fade-up"}>
                  <img src={icons[ix]} alt={"technology " + ix + 1} />
                </div>
              ))}
          </div>

          {/* <!-- bottom --> */}
          <div className="bottom" data-aos="fade-up">
            <div className="box box1">
              <h1>1+</h1>
              <h2>
                Years
                <br />
                experience
              </h2>
            </div>
            <div className="box box2">
              <h1>02</h1>
              <h2>Clients</h2>
            </div>
            <div className="box box3">
              <h1>14+</h1>
              <h2>Projects</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
