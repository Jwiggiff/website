import education from "./_data/education.yml";
import experience from "./_data/experience.yml";
import skills from "./_data/skills.yml";
import projects from "./_data/projects.yml";
import config from "./_data/resume.yml";

import styles from "./sass/resume.scss";

export default function Resume() {
  return (
    <>
      <header>
        <div className="left">
          <div className="name">
            <h1>JOSH FRIEDMAN</h1>
            <p>{config.tagline}</p>
          </div>
          <div className="links">
            <span>
              <i className="fas fa-globe"></i> {config.url}
            </span>
            <div className="clear"></div>
            <span>
              <i className="fas fa-envelope"></i> {config.email}
            </span>
            <div className="clear"></div>
            <span>
              <i className="fas fa-phone-alt"></i> {config.phone}
            </span>
          </div>
        </div>
        <div className="right">
          {config.address.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <div className="clear"></div>
      </header>
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
