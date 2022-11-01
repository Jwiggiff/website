import { useEffect, useRef } from "react";
import Heading from "./_components/Heading";
import skills from "./_data/skills.yml";

export default function Skills({ onScrollIn }) {
  const skillsList = useRef(null);
  let tripleClick = 0;

  useEffect(() => {
    skillsList.current.onclick = (e) => {
      tripleClick++;
      let reset = setTimeout(() => (tripleClick = 0), 750);

      if (tripleClick >= 3) {
        tripleClick = 0;
        clearTimeout(reset);
        skillsList.current.classList.add("broken");
        setTimeout(() => skillsList.current.classList.remove("broken"), 5000);
      }
    };
  }, []);

  return (
    <section className="skills" id="skills">
      <Heading>Skills</Heading>
      <div className="container">
        <ul ref={skillsList} className="skills-list float-text">
          {skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
