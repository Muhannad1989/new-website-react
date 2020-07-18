import React, { Fragment, useState } from "react";

const Button = () => {
  const [ballStyle, setBallStyle] = useState({});
  const [linkStyle, setLinkStyle] = useState({});

  const handelOnMouseMove = () => {
    function help() {
      // const ball = document.getElementById("ball");
      // const link = document.getElementById("link");
      // ball.style.left = "88px";
      setBallStyle({ left: "88px" });
      setTimeout(() => {
        setBallStyle({ transform: "scale(10, 10)", left: "88px" });
        setLinkStyle({ color: "black" });
        // ball.style.transform = "scale(10, 10)";
        // link.style.color = "black";
      }, 500);
    }
    setInterval(help(), 3000);
  };

  const handelOnMouseLeave = () => {
    // const ball = document.getElementById("ball");
    // const link = document.getElementById("link");
    setTimeout(() => {
      // link.style.color = "white";
      // ball.style.transform = "scale(1, 1)";
      setLinkStyle({ color: "white" });
      setBallStyle({ transform: "scale(1, 1)" });
      setTimeout(() => {
        // ball.style.left = "-25px";
        setBallStyle({ left: "-25px", transform: "scale(1, 1)" });
      }, 500);
    }, 500);
  };

  return (
    <Fragment>
      <a href='photos' target='_blank'>
        <div
          onMouseMove={handelOnMouseMove}
          onMouseLeave={handelOnMouseLeave}
          className='first-link'
        >
          <div className='ball' id='ball' style={ballStyle}></div>
          <span className='link' id='link' style={linkStyle}>
            View plan
          </span>
        </div>
      </a>
    </Fragment>
  );
};

export default Button;
