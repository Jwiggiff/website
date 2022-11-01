import { useState } from "react";
import Contact from "./Contact";
import Landing from "./Landing";
import Nav from "./Nav";
import PinWheel from "./PinWheel";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";

export default function App() {
  const [currentSection, setCurrentSection] = useState("home");

  return (
    <>
      <Nav />
      <PinWheel />
      <Landing />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
