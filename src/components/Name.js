const Name = (props) => {
  return (
    <div>
      <label htmlFor="name">Name</label>
      <div>
        <input
          className="input"
          id="name"
          type="text"
          name="name"
          onChange={props.onChange}
          value={props.order.name}
          required
        />
      </div>
    </div>
  );
};

export default Name;
