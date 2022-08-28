import React, { useState } from "react";
import { useRef, useEffect } from "react";

const Viewport = (props) => {
  /* Read all the available methods in the documentation */

  const { height, width } = props.svgSize;
  let svgStyle = {
    height: `${height}px`,
    width: `${width}px`,
  };
  const handleMouseMove = (e) => {
    //console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
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

  return (
    <svg
      className="mySvg"
      style={svgStyle}
      onMouseMove={handleMouseMove}
      onWheel={handleWheel}
      viewBox="0 0 300 300"
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
