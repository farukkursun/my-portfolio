import React from "react";


import faruk from "../img/faruk.jpg";
const About = () => {
  return (
    <div id="about" className="about container">
      <div className="aboutsections d-flex justify-content-center gap-5">
        <img className="resim" src={faruk} alt="" />
        <div className="yazi text-success">
          <p>
            +3 Jahre Erfahrung in der IT und 1 Jahr ein erfahrener
            Front-End-Entwickler, interessiert am Schreiben von Codes, erfahren
            in der Entwicklung komplexer Lösungen, Erstellen reaktionsschneller
            Designs, starkes kreatives Denkvermögen, hohe Energie und
            Integrität. Früher habe ich etwa 14 Jahre als Richter gearbeitet.
            Ich habe an verschiedenen Gerichten gearbeitet. Während ich tätig
            war, habe ich Urteil im National Judiciary Informatik System (UYAP)
            geschrieben. Dank dieser Arbeit wurden viele Softskill gesammelt.
          </p>
        </div>
        
      </div>
    
    </div>
  );
};

export default About;
