import { useEffect, useRef } from "react";

export default function Landing({ onScrollIn }) {
  const backdropRef = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    backdropRef.current.children.forEach((child) => {
      child.onmouseenter = () => child.classList.add("animating");
      child.onanimationend = () => child.classList.remove("animating");
    });
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
      <p>
        <span>👋</span> Hey! I'm Josh, a full stack & embedded systems engineer based in Toronto. I'm currently
        studying Computer Engineering at Queen's University in Kingston.
      </p>
    </section>
  );
}
