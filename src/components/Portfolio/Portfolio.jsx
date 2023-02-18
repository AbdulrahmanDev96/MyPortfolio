import {React, useEffect, useState} from "react";
import Project from "./Project"
import "./portfolio.css";
import {workNavs} from "./AllData";
import {workImages} from "./AllData";

const Portfolio = () => {
  const [tab, setTab] = useState({name: "all"});
  const [works, setWorks] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (tab.name === "all") {
      setWorks(workImages);
    } else {
      const newWork = workImages.filter((workImage) => {
        return workImage.category.toLowerCase() === tab.name;
      });
      setWorks(newWork);
    }
  }, [tab]);

  const activeTab = (e, index) => {
    setTab({name: e.target.textContent.toLowerCase()});
    setActive(index);
  };

  return (
    <section id="portflio">
      <div className="container">
        <div className="top">
          <div className="left">
            <h1>Portfolio</h1>
            <p>
              Here you can see some of my completed
              <br />
              work in various fields ... enjoy
            </p>
          </div>
          <div className="right">
            {workNavs.map((workNav, index) => {
              return (
                <span
                  onClick={(e) => activeTab(e, index)}
                  className={`${active === index ? "active" : ""}`}
                  key={index}>
                  {workNav}
                </span>
              );
            })}
          </div>
        </div>
        <div id="allWork">
          <div className="DesSec">
            <div className="row">
              {works.map((work) => {
                return (
                  <Project work = {work} key={work.id}/>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
