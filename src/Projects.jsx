import Card from "./_components/Card";
import Heading from "./_components/Heading";

import { useEffect, useRef } from "react";

import projects from "./_data/projects.yml";

export default function Projects({ onScrollIn }) {
  const projectsList = useRef(null);

  useEffect(() => {
    if (matchMedia("(min-width: 768px)").matches)
      projectsList.current.onmousemove = ({ clientX, clientY }) => {
        projectsList.current.children.forEach((child) => {
          let rect = child.getBoundingClientRect();
          let x = clientX - rect.x;
          let y = clientY - rect.y;
          child.style.setProperty("--x", `${x}px`);
          child.style.setProperty("--y", `${y}px`);
        });
      };
  }, []);

  return (
    <section className="projects" id="projects">
      <Heading>Projects</Heading>
      <ul className="projects-list" ref={projectsList}>
        {projects
          .filter((p) => !p.resume_only)
          .map((project, i) => (
            <Card key={i} {...project} />
          ))}
      </ul>
    </section>
  );
}
