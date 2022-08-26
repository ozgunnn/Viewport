import React, { useState } from "react";
import { useRef, useEffect } from "react";

const Viewport = (props) => {
  /* Read all the available methods in the documentation */

  const { height, width } = props.svgSize;
  let svgStyle = {
    height: `${height}px`,
    width: `${width}px`,
  };

  return (
    <svg className="mySvg" style={svgStyle}>
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
