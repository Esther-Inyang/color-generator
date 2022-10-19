import React, { useState, ChangeEvent } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";
import "./index.css";

function App() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#40caf8").all(10));
  const [color, setColor] = useState("#357fb3");

  const handleFocus = () => {
    setColor("#54b5fa");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue(value);

    if (value.includes("#") & (value.length === 7)) {
      setColor("#357fb3");
    }
    if (value.length < 7 || !value.includes("#") || value.length > 7) {
      setColor("#f74848");
    }
    if (value === "") {
      setColor("#357fb3");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let valuePattern = new Values(value).all(10);
      setList(valuePattern);
    } catch (error) {
      setError(true);
      error ? setColor("#f74848") : setColor("#357fb3");
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
            value={value}
            placeholder="#f15025"
            onChange={handleChange}
            onFocus={handleFocus}
            style={{
              color: `${color}`,
              border: `2px solid ${color}`,
              outline: `2px solid ${color}`,
            }}
          />

          <button className="btn" type="submit">
            Generate colors
          </button>
        </form>
      </div>

      <section className="colors-box">
        {list.map((inputValue, index) => {
          return (
            <SingleColor
              key={index}
              {...inputValue}
              index={index}
              hexColor={inputValue.hex}
            />
          );
        })}
      </section>
    </section>
  );
}

export default App;
