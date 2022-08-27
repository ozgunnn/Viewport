const SvgInfo = (props) => {
  return (
    <div className="App">
      <p>Svg Height: {props.svgSize.height}</p>
      <p>Svg Width: {props.svgSize.width}</p>
    </div>
  );
};

export default SvgInfo;
