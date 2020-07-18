import React, { Fragment, useEffect } from "react";
import Snow from "./Snow";
import Button from "./Button";
import "./Winter.scss";
// import Container from "../../share/components/container/Container";

const Winter = ({ match, history, setActiveLink }) => {
  // console.log(match.path);
  // if (match.path === "") {
  // console.log("homePage");
  // }
  const createSnow = (num) => {
    let snow = [];
    for (var i = 0; i < num; i++) {
      snow.push(<Snow key={i} />);
    }
    return snow;
  };

  useEffect(() => {
    setActiveLink("winter");
  }, [setActiveLink]);

  return (
    <Fragment>
      <div className='parent'>
        <div className='back'>
          <div className='container'>
            <div className='text-photo'>
              <div className='left box'>
                <h2>We provide solutions for your business!</h2>
                <div className='buttons'>
                  <Button text='View' />
                  <Button text='Over view' />
                  <Button text='Context' />
                </div>
              </div>
              <div className='right box'></div>
            </div>
            {createSnow(100)}
            <div className='wave'></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Winter;
