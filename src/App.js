import "./App.css";
import { useState } from "react";
import Name from "./components/Name";
import PrepTime from "./components/PrepTime";
import Type from "./components/Type";
import ExtraInputs from "./components/ExtraInputs";

function App() {
  const [order, setOrder] = useState({
    name: "",
    prepTime: "00:00:00",
    type: "",
    no_of_slices: "",
    diameter: "",
    spiciness_scale: "",
    slices_of_bread: "",
  });

  // Prepare order and fetch
  const handleSubmit = async (event) => {
    event.preventDefault();
    const parsed = {
      no_of_slices: parseInt(order.no_of_slices),
      diameter: parseFloat(order.diameter),
      spiciness_scale: parseInt(order.spiciness_scale),
      slices_of_bread: parseInt(order.slices_of_bread),
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: order.name,
        preparation_time: order.prepTime,
        type: order.type,
        no_of_slices: parsed.no_of_slices,
        diameter: parsed.diameter,
        spiciness_scale: parsed.spiciness_scale,
        slices_of_bread: parsed.slices_of_bread,
      }),
    };
    const req = await fetch(
      "https://frosty-wood-6558.getsandbox.com:443/dishes",
      requestOptions
    );
    const res = await req.json();
    console.log(res);

    // Confirm order and reset the data
    alert("Your order has been sent !");
    setOrder({
      name: "",
      prepTime: "00:00:00",
      type: "",
      no_of_slices: "",
      diameter: "",
      spiciness_scale: "",
      slices_of_bread: "",
    });
  };

  // Update order state
  const handleChange = (event) => {
    const updatedOrder = { ...order, [event.target.name]: event.target.value };
    setOrder(updatedOrder);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <Name order={order} onChange={handleChange} />
        <PrepTime order={order} onChange={handleChange} />
        <Type order={order} onChange={handleChange} />
        <ExtraInputs order={order} onChange={handleChange} />
        <input type="submit" value="SEND ORDER" className="button" />
      </form>
    </div>
  );
}

export default App;
