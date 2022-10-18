import React, { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";
import "./index.css";

// import { getValue } from "@testing-library/user-event/dist/utils";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#40caf8").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <section className="container">
      <div className="header-section">
        <h1 className="page-title">Color generator App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />

          <button className="btn" type="submit">
            Generate colors
          </button>
        </form>
      </div>

      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </section>
  );
}

export default App;
