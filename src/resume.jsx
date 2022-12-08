import education from "./_data/education.yml";
import experience from "./_data/experience.yml";
import config from "./_data/resume.yml";
import skills from "./_data/skills.yml";
import projects from "./_data/projects.yml";

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
        <p dangerouslySetInnerHTML={{ __html: config.skills }}></p>
      </section>
      <section id="experience">
        <h2>Experience</h2>
        {experience.map((job, index) => (
          <div
            key={index}
            className={"experience" + (job.continued ? " continued" : "")}
          >
            {job.organization && (
              <>
                <div className="firstRow">
                  <span className="company">{job.organization}</span>
                  <span className="location">{job.location}</span>
                </div>
                <div className="clear"></div>
              </>
            )}
            <div className="secondRow">
              <span className="title">{job.title}</span>
              <span className="date">{job.date}</span>
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
      <section id="projects">
        <h2>Projects</h2>
        <p>
          Check out more projects at{" "}
          <a href="https://joshfriedman.dev">joshfriedman.dev</a>. All source
          code is available at{" "}
          <a href="https://github.com/jwiggiff">github.com/jwiggiff</a>.
        </p>
        <ul className="projects">
          {projects
            .filter((p) => p.resume_description)
            .map((project, index) => (
              <li key={index} className="project">
                <h4>{project.title}</h4>
                <a target="_blank" href={project.url}>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <p>{project.resume_description}</p>
              </li>
            ))}
        </ul>
      </section>
      <section id="interest">
        <h2>Other Interests</h2>
        <p>{config.other_interests}</p>
      </section>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>
);
