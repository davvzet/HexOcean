const ExtraInputs = (props) => {
  if (props.order.type === "pizza") {
    return (
      <div>
        <label htmlFor="no_of_slices">Number of slices</label>
        <input
          className="input"
          id="no_of_slices"
          type="number"
          step="1"
          name="no_of_slices"
          onChange={props.onChange}
          required
        ></input>{" "}
        <label htmlFor="diameter">Diameter</label>
        <input
          className="input"
          id="diameter"
          type="number"
          step="0.01"
          name="diameter"
          onChange={props.onChange}
          required
        ></input>{" "}
      </div>
    );
  } else if (props.order.type === "soup") {
    return (
      <div>
        <label htmlFor="scale">Spiciness scale</label>
        <input
          className="input"
          id="scale"
          type="number"
          step="1"
          name="spiciness_scale"
          onChange={props.onChange}
          min="1"
          max="10"
          required
        ></input>{" "}
      </div>
    );
  } else if (props.order.type === "sandwich") {
    return (
      <div>
        <label htmlFor="slicesofbread">Number of slices of bread</label>
        <input
          className="input"
          id="slicesofbread"
          type="number"
          step="1"
          name="slices_of_bread"
          onChange={props.onChange}
          required
        ></input>{" "}
      </div>
    );
  }
};

export default ExtraInputs;
