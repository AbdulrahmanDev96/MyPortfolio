import React from "react";
import eyeIcon from "../../assets/images/69-eye-outline.apng";

function Project({work}) {
  return (
    <div className="box" data-aos="flip-left">
      <div className="workImage">
        <img className="image" src={work.img} alt="workImage" />
      </div>
      <span>
        <div className="shadow"></div>
        <img src={work.img} alt="the work" className="image" />
        <div className="category">{work.category}</div>
        <img className="lordIcon" src={eyeIcon} alt="" />
      </span>
      <a href={work.link} target="_blank">
        {" "}
        <img
          src={require("../../assets/images/link.png")}
          className="link"
          alt="link"
        />
      </a>
    </div>
  );
}

export default Project;
