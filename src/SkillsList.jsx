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
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import {
  CIcon,
  CppIcon,
  FirebaseIcon,
  FlutterIcon,
  TypeScriptIcon,
  VSCodeIcon,
  SupabaseIcon,
  DjangoIcon,
} from "./_components/CustomIcons";

const skillIcons = {
  JavaScript: faJsSquare,
  TypeScript: TypeScriptIcon,
  HTML: faHtml5,
  CSS: faCss3Alt,
  SCSS: faSass,
  SQL: faDatabase,
  C: CIcon,
  "C++": CppIcon,
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
  Python: faPython,
  Supabase: SupabaseIcon,
  Django: DjangoIcon,
};

export default function SkillsList() {
  let draggingEl = useRef(null);

  const onMouseDown = (e) => {
    if (e.buttons != 1) return;
    e.preventDefault();
    draggingEl.current = e.target;
    e.target.classList.add("dragging");
    e.target.dataset.startX = e.clientX;
    e.target.dataset.startY = e.clientY;
  };

  const onMouseMove = (e) => {
    if (e.buttons == 1) {
      e.preventDefault();
      const dx = Number(draggingEl.current.dataset.dx) + e.movementX;
      const dy = Number(draggingEl.current.dataset.dy) + e.movementY;
      draggingEl.current.dataset.dx = dx;
      draggingEl.current.dataset.dy = dy;
      draggingEl.current.style.setProperty("--dx", `${dx}px`);
      draggingEl.current.style.setProperty("--dy", `${dy}px`);
    }
  };

  const onMouseUp = (e) => {
    e.preventDefault();
    draggingEl.current.classList.remove("dragging");
    draggingEl.current = null;
  };

  return (
    <div className="container">
      <ul className="skills-list">
        {Object.values(skills)
          .flat()
          .map((skill, i) => (
            <li
              key={i}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              data-dx="0"
              data-dy="0"
            >
              {<FontAwesomeIcon fillRule="evenodd" icon={skillIcons[skill]} />}
              {skill}
            </li>
          ))}
      </ul>
    </div>
  );
}
