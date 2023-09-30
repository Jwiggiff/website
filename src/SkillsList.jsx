import { useRef, useState } from "react";
import skills from "./_data/skills.yml";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAws,
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJava,
  faJsSquare,
  faLinux,
  faNode,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import {
  CIcon,
  FirebaseIcon,
  FlutterIcon,
  TypeScriptIcon,
  VSCodeIcon,
} from "./_components/CustomIcons";

const skillIcons = {
  JavaScript: faJsSquare,
  TypeScript: TypeScriptIcon,
  HTML: faHtml5,
  CSS: faCss3Alt,
  SCSS: faSass,
  SQL: faDatabase,
  C: CIcon,
  Java: faJava,
  // Assembly: ,
  NodeJS: faNode,
  React: faReact,
  "React Native": faReact,
  Flutter: FlutterIcon,
  Git: faGitAlt,
  AWS: faAws,
  Firebase: FirebaseIcon,
  Linux: faLinux,
  VSCode: VSCodeIcon,
};

export default function SkillsList() {
  const onMouseMove = ({ target, clientX, clientY }) => {
    let rect = target.getBoundingClientRect();
    const x = clientX - rect.x;
    const y = clientY - rect.y;
    target.style.setProperty("--x", `${x}px`);
    target.style.setProperty("--y", `${y}px`);
  };

  return (
    <div className="container">
      <ul className="skills-list">
        {skills.map((skill, i) => (
          <li key={i} onMouseMove={onMouseMove}>
            {<FontAwesomeIcon icon={skillIcons[skill]} />}
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
