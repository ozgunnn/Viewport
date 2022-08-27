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
    const viewBoxValues = document
      .querySelector("svg")
      .getAttribute("viewBox")
      .split(" ");
    const startX = viewBoxValues[0];
    const startY = viewBoxValues[1];
    const width = viewBoxValues[2];
    const height = viewBoxValues[3];
    //const factor = (e.deltaY / Math.abs(e.deltaY)) * 1.1;
    const factor = e.deltaY > 0 ? 1.1 : 0.8;
    const newStartX = startX;
    const newStartY = startY;
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
