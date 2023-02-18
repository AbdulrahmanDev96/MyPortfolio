import {React, useState} from "react";
import "./nav.css";
import {AiOutlineHome} from "react-icons/ai";
import {RiUserStarLine} from "react-icons/ri";
import {BiBookReader} from "react-icons/bi";
import {RiServiceFill} from "react-icons/ri";
import {BsHeadphones} from "react-icons/bs";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <div>
      <nav>
        <a
          href="#home"
          onClick={() => setActiveNav("#home")}
          className={activeNav === "#home" ? "active" : ""}>
          <AiOutlineHome />
        </a>

        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}>
          <RiUserStarLine />
        </a>

        <a
          href="#services"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}>
          <BiBookReader />
        </a>

        <a
          href="#portflio"
          onClick={() => setActiveNav("#portflio")}
          className={activeNav === "#portflio" ? "active" : ""}>
          <RiServiceFill />
        </a>

        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}>
          <BsHeadphones />
        </a>
      </nav>
    </div>
  );
};

export default Nav;
