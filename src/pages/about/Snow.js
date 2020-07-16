import React, { Fragment } from "react";
import "./Snow.scss";

const Snow = () => {
  const style = () => {
    let size = Math.floor(Math.random() * 5) + "vw";
    let opacitySize = Math.floor(Math.random() * 9);
    return {
      left: Math.floor(Math.random() * 100) + "%",
      width: size,
      height: size,
      opacity: `0.${opacitySize}`,
      borderRadius: "50%",
      animationDelay: Math.floor(Math.random() * 10) + "s",
      backgroundColor: "red",
      background: "white",
      position: "absolute",
      transform: "rotate(40deg)",
      transition: "all 0.5s ease-in-out"
    };
  };
  return (
    <Fragment>
      <div className='snow' style={style()}></div>
    </Fragment>
  );
};

export default Snow;
