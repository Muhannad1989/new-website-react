import React, { Fragment, useState } from "react";

const Button = ({ text }) => {
  const [ballStyle, setBallStyle] = useState({});
  const [linkStyle, setLinkStyle] = useState({});

  const [mouseMoving, setMouseMoving] = useState(true);

  const handelOnMouseMove = () => {
    function help() {
      setBallStyle({ left: "88px" });
      setTimeout(() => {
        setBallStyle({ transform: "scale(10, 10)", left: "88px" });
        setLinkStyle({ color: "black" });
      }, 500);
      setMouseMoving(false);
    }
    if (mouseMoving) {
      console.log("mouse on");
      setInterval(help(), 3000);
    }
  };

  const handelOnMouseLeave = () => {
    setTimeout(() => {
      setLinkStyle({ color: "white" });
      setBallStyle({ transform: "scale(1, 1)" });
      setTimeout(() => {
        setBallStyle({ left: "-25px", transform: "scale(1, 1)" });
        setMouseMoving(true);
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
            {text}
          </span>
        </div>
      </a>
    </Fragment>
  );
};

export default Button;
