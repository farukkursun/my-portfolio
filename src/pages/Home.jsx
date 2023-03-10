import React from "react";
import { NavLink } from "react-bootstrap";
// import resim from "../img/resim.jpg"
import {FaGithub, FaLinkedin, FaXingSquare} from 'react-icons/fa'
import Skills from "../components/Skills";
const Home = () => {
  return (
    <div className="home" id="home">
      <div className="baslik text-success container text-center">
        <h1>Faruk <span className="text-white">Kursun</span> </h1>
        <div>
          <Skills/>
        </div>
        {/* <p>
        Frontend Developer | Jurist | HTML5 | CSS3 | JavaScript | React.js | SASS | Bootstrap 
        </p> */}
      </div>
      <div className="link container d-flex justify-content-around text-success ">
        <div className="eins"> <NavLink href="https://github.com/farukkursun" target='_blank'><FaGithub/></NavLink> </div>
        <div className="zwei"> <NavLink href="https://www.linkedin.com/in/faruk-kursun/" target='_blank'><FaLinkedin/> </NavLink>  </div>
        <div className="drei">  <NavLink href="https://www.xing.com/discover/updates" target='_blank'><FaXingSquare/></NavLink> </div>
      </div>
    </div>
  );
};

export default Home;
