import React, { Fragment } from "react";
import Snow from "./Snow";
import "./About.scss";
// import Container from "../../share/components/container/Container";
// import "../about.scss";

const About = ({ match, setActiveLink }) => {
  // setActiveLink(match.path);
  const createSnow = (num) => {
    let snow = [];
    for (var i = 0; i < num; i++) {
      snow.push(<Snow key={i} />);
    }
    return snow;
  };

  return (
    <Fragment>
      <div className='parent'>
        <div className='back'>
          <div className='container'>
            <div className='text-photo'>
              <div className='left box'>
                <h2>We provide solutions for your business!</h2>
                <div className='buttons'>
                  <a href='photos' target='_blank'>
                    <div className='first-link'>
                      <div className='ball' id='ball'></div>
                      <span className='link' id='link'>
                        View palns
                      </span>
                    </div>
                  </a>

                  <a href='photos' target='_blank'>
                    <div className='first-link'>
                      <div className='ball' id='ball'></div>
                      <span className='link' id='link'>
                        View palns
                      </span>
                    </div>
                  </a>
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

export default About;
