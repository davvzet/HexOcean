const Type = (props) => {
  return (
    <div>
      <label htmlFor="type">Type</label>
      <div>
        <select
          className="input"
          id="type"
          name="type"
          onChange={props.onChange}
          required
        >
          <option value="" />
          <option value="pizza">Pizza</option>
          <option value="soup">Soup</option>
          <option value="sandwich">Sandwich</option>
        </select>
      </div>
    </div>
  );
};

export default Type;
