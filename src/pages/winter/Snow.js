import React, { Fragment } from "react";
import "./Snow.scss";

const Snow = () => {
  const experience = [
    "Js",
    "Jquery",
    "React",
    "Bootstrap",
    "Vue",
    "Typescript",
    "Firebase",
    "MongoDb",
    "Node",
    "Express"
  ];

  const choseExperience = () => {
    const length = experience.length;
    const randonNumber = Math.floor(Math.random() * length);
    // console.log(experience[randonNumber]);
    return experience[randonNumber];
  };

  const style = () => {
    let size = Math.floor(Math.random() * 5) + "vw";
    let opacitySize = Math.floor(Math.random() * 9);
    return {
      left: Math.floor(Math.random() * 100) + "%",
      width: size,
      height: size,
      opacity: `0.${opacitySize}`,
      borderRadius: "50%",
      background: "white",
      position: "absolute",
      // transform: "rotate(0deg)",
      transform: "rotate(40deg)",
      // animationDelay: Math.floor(Math.random() * 100) + "s",
      animation: `anim ${Math.floor(Math.random() * 100)}s linear infinite`,
      transition: "all 1s ease-in-out"
    };
  };

  return (
    <Fragment>
      <div className='snow' style={style()}>
        {/* {choseExperience()} */}
      </div>
    </Fragment>
  );
};

export default Snow;
