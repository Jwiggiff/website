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
  faQuoteLeft,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/resume.scss";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const DISABLE_IMAGES = false;

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
              {!DISABLE_IMAGES && <FontAwesomeIcon icon={faGlobe} />}
              {config.url}
            </a>
            <div className="clear"></div>
            <span>
              {!DISABLE_IMAGES && <FontAwesomeIcon icon={faEnvelope} />}
              {config.email}
            </span>
            <div className="clear"></div>
            <span>
              {!DISABLE_IMAGES && <FontAwesomeIcon icon={faPhone} />}
              {config.phone}
            </span>
          </div>
        </div>
        <div className="right">
          <span>
            {config.location}{" "}
            {!DISABLE_IMAGES && <FontAwesomeIcon icon={faLocationDot} />}
          </span>
          <div className="clear"></div>
          <a target="_blank" href={"https://" + config.linkedin}>
            {config.linkedin}{" "}
            {!DISABLE_IMAGES && <FontAwesomeIcon icon={faLinkedin} />}
          </a>
          <div className="clear"></div>
          <a target="_blank" href={"https://" + config.github}>
            {config.github}{" "}
            {!DISABLE_IMAGES && <FontAwesomeIcon icon={faGithub} />}
          </a>
        </div>
        <div className="clear"></div>
      </header>
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
        <div className="skills">
          {Object.entries(skills).map(([cat, list]) => (
            <p>
              <b>{cat}: </b>
              <span>| </span>
              {list.map((skill) => (
                <span>{skill} | </span>
              ))}
            </p>
          ))}
        </div>
      </section>
      <section id="experience">
        <h2>Experience</h2>
        <p className="subtext">
          Full work experience can be seen at{" "}
          <a href="https://linkedin.com/in/joshwfriedman">
            linkedin.com/in/joshwfriedman
          </a>
          .
        </p>
        {experience.map((job, index) => (
          <div
            key={index}
            className={"experience" + (job.continued ? " continued" : "")}
          >
            <div className="heading">
              {!DISABLE_IMAGES && job.icon && (
                <a href={job.url} target="_blank" className="icon">
                  <img className="icon" src={job.icon} alt={job.organization} />
                </a>
              )}
              <div>
                {job.title && (
                  <>
                    <div className="firstRow">
                      <a href={job.url} target="_blank" className="title">
                        {job.title}
                      </a>
                      <span className="location">{job.location}</span>
                    </div>
                  </>
                )}
                <div className="secondRow">
                  <span className="company">{job.organization}</span>
                  <span className="date">{job.date}</span>
                </div>
              </div>
            </div>
            <div className="clear"></div>
            <p className="context">{job.context}</p>
            <ul className="description">
              {job.description.map((point, index) => (
                <li key={index}>
                  <ReactMarkdown>{point}</ReactMarkdown>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <p className="subtext">
          More projects at{" "}
          <a href="https://joshfriedman.dev">joshfriedman.dev</a>. Source code
          available at{" "}
          <a href="https://github.com/jwiggiff">github.com/jwiggiff</a>.
        </p>
        <ul className="projects">
          {projects
            .filter((p) => p.resume_description)
            .map((project, index) => (
              <li key={index} className="project">
                <h4>{project.title}</h4>
                {!DISABLE_IMAGES && project.url && (
                  <a target="_blank" href={project.url}>
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                )}
                <ReactMarkdown>{project.resume_description}</ReactMarkdown>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>
);
