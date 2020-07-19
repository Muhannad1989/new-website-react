import React, { Fragment, useEffect, useContext } from "react";
import Snow from "./Snow";
import Button from "./Button";
import Photos from "./Photos";
import "./Winter.scss";
import { CurrentPageContext } from "../../share/context/current-page";

const Winter = ({ match, history, setActiveLink }) => {
  const current = useContext(CurrentPageContext);
  const createSnow = (num) => {
    let snow = [];
    for (var i = 0; i < num; i++) {
      snow.push(<Snow key={i} />);
    }
    return snow;
  };

  useEffect(() => {
    setActiveLink("winter");
    current.setCurrentPage("winter");
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
            <h2>xxxxxxxxxxx</h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Winter;
