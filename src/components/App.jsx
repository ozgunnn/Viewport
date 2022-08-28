import React, { useState } from "react";
import Viewport from "./viewport.jsx";
import Buttons from "./buttons.jsx";
import Inputs from "./inputs.jsx";
import SvgInfo from "./svginfo.jsx";
import "../App.css";

function App() {
  const initialSize = 500;
  const [svgSize, setSvgSize] = useState({
    height: initialSize,
    width: initialSize,
  });
  const [points, setPoints] = useState([[35, 40]]);
  const zoomIn = () => {
    setSvgSize({
      ...svgSize,
      height: svgSize.height * 1.25,
      width: svgSize.width * 1.25,
    });
  };

  const zoomOut = () => {
    setSvgSize({
      ...svgSize,
      height: svgSize.height * 0.8,
      width: svgSize.width * 0.8,
    });
  };

  const onInputSubmit = (x, y) => {
    let dumPoints = [...points];
    dumPoints.push([x, y]);
    setPoints(dumPoints);
  };

  return (
    <>
      <Viewport initialSize={initialSize} svgSize={svgSize} points={points} />
      <Inputs onSubmit={onInputSubmit} />
      <SvgInfo svgSize={svgSize} />

      <Buttons zoomIn={zoomIn} zoomOut={zoomOut} />
    </>
  );
}

export default App;
