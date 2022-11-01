import { useEffect, useRef } from "react";

export default function Landing({ onScrollIn }) {
  const backdropRef = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    backdropRef.current.children.forEach((child) => {
      child.onmouseenter = () => child.classList.add("animating");
      child.onanimationend = () => child.classList.remove("animating");
    });

    pRef.current.onmousemove = ({ clientX, clientY }) => {
      let rect = pRef.current.getBoundingClientRect();
      let x = clientX - rect.x;
      let y = clientY - rect.y;
      pRef.current.style.setProperty("--x", `${x}px`);
      pRef.current.style.setProperty("--y", `${y}px`);
    };
  }, []);

  return (
    <section className="landing" id="landing">
      <h1>
        <div className="backdrop" ref={backdropRef}>
          <span>J</span>
          <span>O</span>
          <span>S</span>
          <span>H</span>
        </div>
        <span>Josh Friedman</span>
      </h1>
      <p ref={pRef}>Full Stack Developer</p>
    </section>
  );
}
