import React, { useState } from "react";

const Viewport = (props) => {
  /* Read all the available methods in the documentation */
  const [mouseCoords, setMouseCoords] = useState({ x: 0.0, y: 0.0 });
  const [clickCoords, setClickCoords] = useState({ x: 0, y: 0 });
  const [clickViewBox, setClickViewBox] = useState({
    startX: 0,
    startY: 0,
    width: 0,
    height: 0,
  });
  const [onHold, setOnHold] = useState(false);

  const { height, width } = props.svgSize;
  let svgStyle = {
    height: `${height}px`,
    width: `${width}px`,
  };
  const handleMouseMove = (e) => {
    setMouseCoords({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });

    //console.log(mouseCoords);
    if (onHold) {
      let deltaX =
        ((mouseCoords.x - clickCoords.x) * clickViewBox.width) /
        props.initialSize;
      let deltaY =
        ((mouseCoords.y - clickCoords.y) * clickViewBox.height) /
        props.initialSize;
      console.log(deltaX, deltaY);

      const newStartX = parseFloat(clickViewBox.startX) - deltaX;
      const newStartY = parseFloat(clickViewBox.startY) - deltaY;
      const newWidth = parseFloat(clickViewBox.width);
      const newHeight = parseFloat(clickViewBox.height);
      document
        .querySelector("svg")
        .setAttribute(
          "viewBox",
          `${newStartX} ${newStartY} ${newWidth} ${newHeight}`
        );
    }
  };

  const handleWheel = (e) => {
    console.log(e);
    const xCoord = e.nativeEvent.offsetX;
    const yCoord = e.nativeEvent.offsetY;
    const viewBoxValues = document
      .querySelector("svg")
      .getAttribute("viewBox")
      .split(" ");
    const [startX, startY, width, height] = viewBoxValues;
    const factor = e.deltaY > 0 ? 1.25 : 0.8;
    const newStartX =
      parseFloat(startX) + (xCoord / props.initialSize) * (1 - factor) * width;
    const newStartY =
      parseFloat(startY) + (yCoord / props.initialSize) * (1 - factor) * height;
    const newWidth = width * factor;
    const newHeight = height * factor;
    document
      .querySelector("svg")
      .setAttribute(
        "viewBox",
        `${newStartX} ${newStartY} ${newWidth} ${newHeight}`
      );
  };

  const handleMouseClick = (e) => {
    //console.log(e);
  };

  const handleMouseDown = (e) => {
    setOnHold(true);
    setClickCoords({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    const viewBoxValues = document
      .querySelector("svg")
      .getAttribute("viewBox")
      .split(" ");
    const [startX, startY, width, height] = viewBoxValues;
    setClickViewBox({
      startX: parseFloat(startX),
      startY: parseFloat(startY),
      width: parseFloat(width),
      height: parseFloat(height),
    });
  };

  const handleMouseUp = (e) => {
    setOnHold(false);
  };

  return (
    <svg
      className="mySvg"
      style={svgStyle}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onWheel={handleWheel}
      onClick={handleMouseClick}
      viewBox="-300 -300 600 600"
    >
      {props.points.map((coord) => (
        <circle
          cx={`${coord[0]}`}
          cy={`${coord[1]}`}
          r="40"
          stroke="black"
          stroke-width="3"
          fill="red"
        />
      ))}
    </svg>
  );
};

export default Viewport;
