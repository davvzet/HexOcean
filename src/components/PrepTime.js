const PrepTime = (props) => {
  return (
    <div>
      <label htmlFor="prepTime">Preparation time</label>
      <input
        className="input"
        id="time"
        type="time"
        name="prepTime"
        value={props.order.prepTime}
        onChange={props.onChange}
        step="2"
        required
      />
    </div>
  );
};

export default PrepTime;
