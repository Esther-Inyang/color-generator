import React, { useState, useEffect } from "react";
// import rgbToHex from "./utils";
import "./index.css";

function SingleColor({ rgb, weight, index, hexColor }) {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");

  // const hex = rgbToHex(...rgb);

  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article className="colors-container">
      <div
        title="click to copy color"
        className={`color-div ${index > 10 && "color-div-light"}`}
        style={{ backgroundColor: `rgb(${bcg})` }}
        onClick={() => {
          setAlert(true);
          navigator.clipboard.writeText(hexValue);
        }}
      >
        <p className="weight">{weight}%</p>
        <p className="hex-value">{hexValue}</p>
        {alert && <p className="to-clipboard">copied to clipboard</p>}
      </div>
    </article>
  );
}

export default SingleColor;
