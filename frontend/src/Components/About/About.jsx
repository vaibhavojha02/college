import React from "react";
import "./About.css";
import about_img from "../../assets/eedept.png";


const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
       
      </div>
      <div className="about-right">
        <h3>MISSION</h3>

        <p>
          To educate and train the students equipped with knowledge of
          electrical engineering, analytical abilities, ethics and integrity
          human and social values and leadership qualities Capacity building,
          innovation and development of research capabilities through
          collaboration / agreements and symbiotic relationship with industry /
          institutes / universities and other government / private /
          non-government agencies and civil societies. Providing environment
          friendly, reasonable and sustainable solutions for local & global
          needs. Creating awareness and also enhancing resource generation
          through STCs, FDPs, SDPs, etc. Implementation of quality processes in
          teaching and learning, and research. Foster an ecosystem as per the
          need of the time well-knitted with the nature, and establishing
          Centre(s) of Excellence / state of art lab facilities in niche areas
          as per strengths of department Establishing the department as the
          leader and hand holding others institutions / universities
        </p>
      </div>
    </div>
  );
};

export default About;
