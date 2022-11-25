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
import { useEffect } from "react";
import styles from "./sass/resume.scss?inline";

export default function Resume({ window }) {
  useEffect(() => window.print(), []);

  return (
    <>
      <style>{styles}</style>
      <header>
        <div className="left">
          <div className="name">
            <h1>JOSH FRIEDMAN</h1>
            <p>{config.tagline}</p>
          </div>
          <div className="links">
            <span>
              <FontAwesomeIcon icon={faGlobe} /> {config.url}
            </span>
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
          <span>
            {config.linkedin} <FontAwesomeIcon icon={faLinkedin} />
          </span>
          <div className="clear"></div>
          <span>
            {config.github} <FontAwesomeIcon icon={faGithub} />
          </span>
        </div>
        <div className="clear"></div>
      </header>
      <section id="intro">
        <p>{config.intro}</p>
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
          </div>
        ))}
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index} className="skill">
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
