import React, { useState } from "react";
import Viewport from "./viewport.jsx";
import Buttons from "./buttons.jsx";
import Inputs from "./inputs.jsx";
import "../App.css";

function App() {
  const [svgSize, setSvgSize] = useState({ height: 300, width: 300 });
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
      <Viewport svgSize={svgSize} points={points} />
      <div className="App">
        <Inputs onSubmit={onInputSubmit} />
        <p>Svg Height: {svgSize.height}</p>
        <p>Svg Width: {svgSize.width}</p>
      </div>
      <Buttons zoomIn={zoomIn} zoomOut={zoomOut} />
    </>
  );
}

export default App;
