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
      <div ref={skillsList} className="container float-text">
        {Object.keys(skills).map((cat, index) => (
          <div className="row" key={index}>
            <ul className="skills-list">
              {skills[cat].map((skill, i) => (
                <li key={i}>{skill.split("(")[0]}</li>
              ))}
            </ul>
          </div>
        ))}
        {/* <div className="row">
          Languages:
          <ul></ul>
        </div>
        <div className="row">
          Frameworks:
          <ul></ul>
        </div>
        <div className="row">
          Tools:
          <ul></ul>
        </div> */}
      </div>
    </section>
  );
}
