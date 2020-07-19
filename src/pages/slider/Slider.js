import React, { useEffect, useState, useContext } from "react";
import Container from "../../share/components/container/Container";
import { CurrentPageContext } from "../../share/context/current-page";
import Gallery from "./Gallery";
import "./Slider.scss";
const Slider = ({ match, history, setActiveLink }) => {
  const current = useContext(CurrentPageContext);
  // console.log(match.path);
  // console.log(history.location.pathname);
  // useEffect(() => {
  //  setActiveLink("test");
  // });
  // console.log("render");
  // const [counter, setCounter] = useState(1);
  // const size = allImages[0].clientWidth;
  //  transform: `translateX${-size * counter}px`
  const [style, setStyle] = useState(null);
  const [size, setSize] = useState(0);

  const width = 800;

  useEffect(() => {
    // turn link to active
    setActiveLink("slider");
    // check size of
    console.log(size);
    current.setCurrentPage("slider");
  }, [size, setActiveLink]);

  const handleNext = () => {
    if (size >= 0) {
      return;
      // setStyle({
      //   transform: `translateX(-1600px)`
      // });
      // setSize(0);
    } else {
      setStyle({
        transform: `translateX(${size + width}px)`
      });
      console.log("next");
      setSize((c) => c + width);
    }
  };

  const handlePrevious = () => {
    if (size === -6400) {
      return;
      // setStyle({
      //   transform: `translateX(0px)`
      // });
      // setSize(0);
    } else {
      setStyle({
        transform: `translateX(${size - width}px)`
      });
      console.log("previous");
      setSize((c) => c - width);
    }
  };

  return (
    <Container>
      <div className='con'>
        <button className='next' onClick={handleNext}>
          Prev
        </button>
        <button className='previous' onClick={handlePrevious}>
          Next
        </button>
        <div className='slide' style={style}>
          {Gallery.map((ele, index) => (
            <div key={index} className='img' style={{ backgroundImage: `url(${ele})` }}>
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Slider;
