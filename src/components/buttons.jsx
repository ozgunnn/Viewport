function Buttons(props) {
  return (
    <div className="buttons">
      <button className="button" onClick={props.zoomIn}>
        Increase
      </button>
      <button className="button" onClick={props.zoomOut}>
        Decrease
      </button>
    </div>
  );
}

export default Buttons;
