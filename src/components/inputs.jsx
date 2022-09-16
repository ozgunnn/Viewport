import React, { useState } from "react";

const Inputs = (props) => {
  const [node, setNode] = useState({
    x: 0,
    y: 0,
  });
  const handleChange = (e) => {
    setNode({ ...node, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    props.onSubmit(parseInt(node.x), parseInt(node.y));
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>X: </label>
      <input type="number" name="x" value={node.x} onChange={handleChange} />
      <label>Y: </label>
      <input type="number" name="y" value={node.y} onChange={handleChange} />
      <button className="btn btn-primary add-coordinate-button" type="submit">
        Add Circle
      </button>
    </form>
  );
};

export default Inputs;
