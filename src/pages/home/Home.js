import React, { useEffect } from "react";
import Container from "../../share/components/container/Container";
// import Footer from "../../share/components/footer/Footer";
// import Sidebar from "../../share/components/sidebar/Sidebar";
// import { scroll, select } from "../../share/utils/scroll";

import "./Home.scss";
const Home = ({ match, history, setActiveLink }) => {
  // if (match.path === "/" || match.path === "/home") {
  // console.log("homePage");

  // }
  // useEffect(() => {
  //   select();
  // }, []);

  useEffect(() => {
    setActiveLink("home");
  }, [setActiveLink]);

  return (
    <Container>
      <h1>HOME</h1>
      <p>Coming soon...</p>
    </Container>
  );
};

export default Home;
