import React from "react";

import uniqid from 'uniqid'
import { skills } from "../portfolio";

const Skills = () => {
  return (
    <div className="dectionsskills">
      <h2 className="sectiontitle">Skills</h2>
      <ul className="skillslist">
        {skills.map((skill) => (
          <li key={uniqid} className="skilllistitem btn btn-outline-success">{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
