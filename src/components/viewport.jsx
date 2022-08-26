import React, { useState } from "react";
import { useRef, useEffect } from "react";
import { UncontrolledReactSVGPanZoom } from "react-svg-pan-zoom";

const Viewport = (props) => {
  const Viewer = useRef(null);
  useEffect(() => {
    Viewer.current.fitToViewer();
  }, []);

  /* Read all the available methods in the documentation */
  const _zoomOnViewerCenter = () => Viewer.current.zoomOnViewerCenter(1.1);
  const _fitSelection = () => Viewer.current.fitSelection(40, 40, 200, 200);
  const _fitToViewer = () => Viewer.current.fitToViewer();

  const { height, width } = props.svgSize;
  let svgStyle = {
    /*height: `${height}px`,
    width: `${width}px`,*/
  };

  return (
    <div className="container">
      <button className="btn" onClick={() => _zoomOnViewerCenter()}>
        Zoom on center
      </button>
      <button className="btn" onClick={() => _fitSelection()}>
        Zoom area 200x200
      </button>
      <button className="btn" onClick={() => _fitToViewer()}>
        Fit
      </button>
      <hr />
      <UncontrolledReactSVGPanZoom
        ref={Viewer}
        width={500}
        height={500}
        onZoom={(e) => console.log("zoom")}
        onPan={(e) => console.log("pan")}
        onClick={(event) =>
          console.log("click", event.x, event.y, event.originalEvent)
        }
      >
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
      </UncontrolledReactSVGPanZoom>
    </div>
  );
};

export default Viewport;
