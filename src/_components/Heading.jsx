// import Sketch from "react-p5";
import { Point } from "../extra/Point";
import p5 from "p5";
import { useEffect, useRef } from "react";

export default function Heading({ children }) {
  const canvasParentRef = useRef(null);
  let sketch;

  useEffect(() => {
    sketch = new p5((p) => {
      let font;
      let points;
      let fontSize = parseInt(
        getComputedStyle(canvasParentRef.current).fontSize.split("px")[0]
      );
      let paddingLeft = Math.min(10 * 16, window.innerWidth * 0.08);

      p.preload = () => {
        font = p.loadFont(
          "https://raw.githubusercontent.com/google/fonts/main/ofl/poppins/Poppins-Bold.ttf"
        );
      };

      p.setup = () => {
        p.createCanvas(1000, 250).parent(canvasParentRef.current);

        points = font.textToPoints(
          children,
          paddingLeft,
          p.height / 2 + fontSize / 3,
          fontSize
        );
        points = points.map((point) => new Point(p5, p, point.x, point.y));
      };

      p.draw = () => {
        p.clear();
        for (let p of points) {
          p.doBehaviours();
          p.update();
          p.draw();
        }
      };

      p.touchEnded = () => {
        p.mouseX = 0;
        p.mouseY = 0;
      };
    });

    return () => sketch.remove();
  });

  return (
    <div
      // style={{ marginLeft: "clamp(-2rem, -10vw, -10rem)", marginTop: "clamp(-1rem, -5vw, -5rem)" }}
      className="p5-sketch"
      ref={canvasParentRef}
    ></div>
  );
}
