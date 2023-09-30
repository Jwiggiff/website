import Sketch from "react-p5";

export default function GravityWords({ list }) {
  const setup = (p5m, canvasParentRef) => {
    p5m.createCanvas(500, 500).parent(canvasParentRef);
  };

  const draw = (p5) => {};

  return (
    <>
      <ul style={{ display: "hidden" }}>
        {list.map((li) => (
          <li key={li}>{li}</li>
        ))}
      </ul>
      <Sketch setup={setup} draw={draw} />
    </>
  );
}
