import {
  faCodepen,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import Heading from "./_components/Heading";
import contact from "./_data/contact.yml";

import * as ReactDOMServer from "react-dom/server";

export default function Contact({ onScrollIn }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.onmousemove = ({ clientX, clientY }) => {
      let rect = buttonRef.current.getBoundingClientRect();
      buttonRef.current.style.setProperty("--x", `${clientX - rect.x}px`);
      buttonRef.current.style.setProperty("--y", `${clientY - rect.y}px`);
    };
  }, []);

  return (
    <section className="contact" id="contact">
      <Heading>Contact</Heading>
      <div className="container">
        <p className="float-text">{contact.email}</p>
        <div className="socials">
          <a href={contact.linkedin} target="_blank" id="linkedin">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href={contact.github} target="_blank" id="github">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={contact.codepen} target="_blank" id="codepen">
            <FontAwesomeIcon icon={faCodepen} />
          </a>
        </div>
        <a id="resume-dl" ref={buttonRef} href="/assets/resume.pdf" target="_blank">
          <FontAwesomeIcon icon={faCircleDown} />
          Resume
        </a>
      </div>
    </section>
  );
}
