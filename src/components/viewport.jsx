import React, { useState } from "react";

const Viewport = (props) => {
  const { height, width } = props.svgSize;
  let svgStyle = {
    height: `${height}px`,
    width: `${width}px`,
  };

  return (
    <div className="container">
      <svg style={svgStyle}>
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
    </div>
  );
};

export default Viewport;
