import React, { useEffect, useContext } from "react";
import Container from "../../share/components/container/Container";
// import Footer from "../../share/components/footer/Footer";
// import Sidebar from "../../share/components/sidebar/Sidebar";
// import { scroll, select } from "../../share/utils/scroll";

import { CurrentPageContext } from "../../share/context/current-page";

import "./Home.scss";
const Home = ({ match, history, setActiveLink }) => {
  const current = useContext(CurrentPageContext);

  // if (match.path === "/" || match.path === "/home") {
  // console.log("homePage");

  // }
  // useEffect(() => {
  //   select();
  // }, []);

  useEffect(() => {
    setActiveLink("home");
    current.setCurrentPage("home");
  }, [setActiveLink]);

  return (
    <Container>
      <h1>HOME</h1>
      <p>Coming soon...</p>
    </Container>
  );
};

export default Home;
