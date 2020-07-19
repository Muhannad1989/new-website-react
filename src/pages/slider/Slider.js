import React, { useEffect, useState, useContext } from "react";
import Container from "../../share/components/container/Container";
import { CurrentPageContext } from "../../share/context/current-page";

import "./Slider.scss";
const Slider = ({ match, history, setActiveLink }) => {
  const current = useContext(CurrentPageContext);
  // console.log(match.path);
  // console.log(history.location.pathname);
  // useEffect(() => {
  //  setActiveLink("test");
  // });
  const images = [
    "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png",
    "https://images.squarespace-cdn.com/content/v1/5a5906400abd0406785519dd/1547305833918-3GKETBUWRDXCEC6P5C2N/ke17ZwdGBToddI8pDm48kKAwwdAfKsTlKsCcElEApLR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UegTYNQkRo-Jk4EWsyBNhwKrKLo5CceA1-Tdpfgyxoog5ck0MD3_q0rY3jFJjjoLbQ/yenyi.jpg",
    "https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg",
    "https://images.squarespace-cdn.com/content/v1/5a5906400abd0406785519dd/1552662149940-G6MMFW3JC2J61UBPROJ5/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/baelen.jpg?format=1500w",
    "https://s17736.pcdn.co/wp-content/uploads/2019/03/jason-leung-479251-unsplash-1024x683.jpg",
    // "https://freebiesdesign.com/wp-content/uploads/2016/03/12-Real-Watercolor-Backgrounds.jpg",
    "https://designshack.net/wp-content/uploads/background-design-trends.jpg",
    "https://i.pinimg.com/originals/f5/67/e5/f567e506830af8004b737c9ba6cdec0b.jpg",
    "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_600,q_75,w_1000/v1/clients/napavalley/Chappellet_Vineyard_Sunset_in_Fall_42eaa7cf-a1f1-4f6b-a260-b6890a6762db.jpg",
    "https://www.royalcaribbeanblog.com/sites/default/files/styles/500px/public/blog-images/Zoom_Background%2012%20-%20Beach%20Sunset.jpg?itok=4jqAH8T5"
  ];
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
          {images.map((ele, index) => (
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
