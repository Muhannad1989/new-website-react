import React, { Fragment } from "react";
import "./Button.scss";
const Button = () => {
  const colors = {
    orange_light: "#f6653c",
    blue_light: "#2ac4ea",
    green_light: "#77cc6d"
  };

  return (
    <Fragment>
      <button className='default_button' style={{ backgroundColor: colors.orange_light }}>
        orange light
      </button>
      <button className='default_button' style={{ backgroundColor: colors.blue_light }}>
        blue light
      </button>
      <button className='default_button' style={{ backgroundColor: colors.green_light }}>
        green light
      </button>
    </Fragment>
  );
};

export default Button;
