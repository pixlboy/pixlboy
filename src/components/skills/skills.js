import "./skills.scss";

import { useState } from "react";

export default function Skills() {
  const [skills, setSkills] = useState({
    programming: ["JavaScript", "ES6", "TypeScript", "Node JS"],
    frameworks: ["React", "Redux", "Angular v2+", "NgRx", "Express", "Kendo"],
    design: ["HTML5", "CSS3", "SASS", "EJS", "Bootstrap", "Material UI"],
    services: ["Firebase", "AWS", "Git", "Jenkins", "Bamboo"],
    build: ["Docker", "Gulp", "Webpack", "Grunt"],
    testing: ["Jasmine", "Karma", "Jest"],
    patterns: [
      "Object Oriented",
      "MVC",
      "REST",
      "Progressive Web Apps",
      "Microservices",
    ],
  });

  return (
    <section className="section-skills content-box">
      <h2 className="section-header">
        <span className="heading">TOOLS & TECHNOLOGIES</span>
      </h2>
      <div className="section-content clear-all">
        <div className="skill-stats">
          <span className="skill-bar frontend" title="frontend">
            Frontend
          </span>
          <span className="skill-bar middleware" title="middleware">
            Middleware
          </span>
          <span className="skill-bar backend" title="backend">
            Backend
          </span>
          <span className="skill-bar others" title="others">
            Others
          </span>
        </div>
        <ul className="skill-list">
          <li>
            <strong>Programming</strong>
            <ol>
              {skills.programming.map((item, i) => 
                <li key={i} className="item">{item}</li>                
              )}
            </ol>
          </li>
          <li>
            <strong>Frameworks &amp; Libraries</strong>
            <ol>
              {skills.frameworks.map((item, i) => (
                <li key={i} className="item">{item}</li>
              ))}
            </ol>
          </li>
          <li>
            <strong>Template &amp; Styling</strong>
            <ol>
              {skills.design.map((item, i) => (
                <li key={i} className="item">{item}</li>
              ))}
            </ol>
          </li>
          <li>
            <strong>Services</strong>
            <ol>
              {skills.services.map((item, i) => (
                <li key={i} className="item">{item}</li>
              ))}
            </ol>
          </li>
          <li>
            <strong>Build &amp; Deploy</strong>
            <ol>
              {skills.build.map((item, i) => (
                <li key={i} className="item">{item}</li>
              ))}
            </ol>
          </li>
          <li>
            <strong>Testing</strong>
            <ol>
              {skills.testing.map((item, i) => (
                <li key={i} className="item">{item}</li>
              ))}
            </ol>
          </li>
          <li>
            <strong>Others</strong>
            <ol>
              {skills.patterns.map((item, i) => (
                <li key={i} className="item">{item}</li>
              ))}
            </ol>
          </li>
        </ul>
      </div>
    </section>
  );
}
