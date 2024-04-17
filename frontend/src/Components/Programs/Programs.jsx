import React from "react";
import "./Programs.css";
import { Link } from "react-scroll";
import program_1 from "../../assets/WhatsApp Image 2024-04-17 at 18.33.16_1c889ad9.jpg";
import program_2 from "../../assets/WhatsApp Image 2024-04-17 at 18.32.56_069eba7c.jpg";
import program_3 from "../../assets/WhatsApp Image 2024-04-17 at 18.32.55_e522df17.jpg";

const Programs = () => {
  return (
    
    <div className="programs">
    
      <div className="program">
      <img src={program_1} alt="" />
      <a href="https://sites.google.com/view/ashu2507y/home" target="_blank">
        <div className="caption">
          <p>Association of electrical engineers</p>
        </div>
        </a>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <p>IEEE PELS</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <p>IEEE STB</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
