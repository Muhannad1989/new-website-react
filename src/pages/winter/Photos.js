import React, { Fragment } from "react";

const Photos = () => {
  return (
    <Fragment>
      {[...Array(9)].map((ele, index) => (
        <h2 key={index}>test</h2>
      ))}
    </Fragment>
  );
};

export default Photos;
