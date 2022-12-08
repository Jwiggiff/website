import { useRef, useState } from "react";
import Heading from "./_components/Heading";
import skills from "./_data/skills.yml";

export default function Skills({ onScrollIn }) {
  const shouts = [
    "Click Me!",
    "Ouch!",
    "Stop it!",
    "That really hurt!",
    "Okay it's not funny anymore",
    "Seriously?",
    "This ISN'T funny!",
    "Ughhhhh",
    "You've got to have something better to do",
    "Really? Nothing?",
    "Come on!?",
    "Don't you have a life?",
    "Go outside maybe",
    "Get off your computer for a bit",
    "This is getting ridiculous",
    "I'm not even mad, I'm just disappointed",
  ];
  const [shoutI, setShoutI] = useState(0);
  const containerRef = useRef(null);

  const onClick = () => {
    if (shoutI < shouts.length - 1) setShoutI(shoutI + 1);
    containerRef.current.classList.add("active");
    containerRef.current.addEventListener("animationend", () =>
      containerRef.current.classList.remove("active")
    );
  };

  return (
    <section className="skills" id="skills">
      <Heading>Skills</Heading>
      <div
        onClick={onClick}
        ref={containerRef}
        className="container float-text"
        shout={shouts[shoutI]}
        style={{ "--deg": (shoutI / (shouts.length - 1)) * 360 + "deg" }}
      >
        {Object.keys(skills).map((cat, index) => (
          <div className="row" key={index}>
            <ul className="skills-list">
              {skills[cat].map((skill, i) => (
                <li key={i}>{skill.split("(")[0]}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
