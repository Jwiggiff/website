import education from "./_data/education.yml";
import experience from "./_data/experience.yml";
import config from "./_data/resume.yml";
import skills from "./_data/skills.yml";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faGlobe,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/resume.scss";

function Resume() {
  return (
    <>
      <header>
        <div className="left">
          <div className="name">
            <h1>JOSH FRIEDMAN</h1>
            <p>{config.tagline}</p>
          </div>
          <div className="links">
            <a target="_blank" href={"https://" + config.url}>
              <FontAwesomeIcon icon={faGlobe} /> {config.url}
            </a>
            <div className="clear"></div>
            <span>
              <FontAwesomeIcon icon={faEnvelope} /> {config.email}
            </span>
            <div className="clear"></div>
            <span>
              <FontAwesomeIcon icon={faPhone} /> {config.phone}
            </span>
          </div>
        </div>
        <div className="right">
          <span>
            {config.location} <FontAwesomeIcon icon={faLocationDot} />
          </span>
          <div className="clear"></div>
          <a target="_blank" href={"https://" + config.linkedin}>
            {config.linkedin} <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <div className="clear"></div>
          <a target="_blank" href={"https://" + config.github}>
            {config.github} <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className="clear"></div>
      </header>
      <section id="intro">
        <p>{config.intro}</p>
      </section>
      <section id="education">
        <h2>Education</h2>
        {education.map((school, index) => (
          <div key={index} className="education">
            <span className="school">{school.name}</span>
            <span className="date">{school.date}</span>
            <div className="clear"></div>
            <span className="location">{school.location}</span>
            {(school.gpa || school.average) && (
              <span className="average">
                {school.gpa ? `GPA: ${school.gpa}` : `Avg: ${school.average}`}
              </span>
            )}
            <div className="clear"></div>
            <ul className="awards">
              {school.awards?.map((award, index) => (
                <li key={index}>{award}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section id="skills">
        <h2>Technical Skills</h2>
        <div className="skills-list">
          {Object.keys(skills).map((skill, index) => (
            <div key={index} className="skills__category">
              <strong>{skill + ": "}</strong>
              <p>{skills[skill].join(", ")}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="experience">
        <h2>Experience</h2>
        {experience.map((job, index) => (
          <div key={index} className="experience">
            <div className="firstRow">
              <span className="company">{job.organization}</span>
              <span className="date">{job.date}</span>
            </div>
            <div className="clear"></div>
            <div className="secondRow">
              <span className="title">{job.title}</span>
              <span className="location">{job.location}</span>
            </div>
            <div className="clear"></div>
            <ul className="description">
              {job.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>
);
