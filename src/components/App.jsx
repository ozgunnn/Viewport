import React, { useState } from "react";
import Viewport from "./viewport.jsx";
import Buttons from "./buttons.jsx";
import Inputs from "./inputs.jsx";
import SvgInfo from "./svginfo.jsx";
import "../App.css";

function App() {
  const initialSizeX = 800;
  const initialSizeY = 500;
  const [svgSize, setSvgSize] = useState({
    height: initialSizeY,
    width: initialSizeX,
  });
  const [points, setPoints] = useState([[35, 40]]);

  const onInputSubmit = (x, y) => {
    let dumPoints = [...points];
    dumPoints.push([x, y]);
    setPoints(dumPoints);
  };

  return (
    <>
      <Viewport
        initialSizeX={initialSizeX}
        initialSizeY={initialSizeY}
        svgSize={svgSize}
        points={points}
      />
      <Inputs onSubmit={onInputSubmit} />
      <SvgInfo svgSize={svgSize} />
    </>
  );
}

export default App;
