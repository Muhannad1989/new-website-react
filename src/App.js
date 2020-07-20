import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Header from "./share/components/header/Header";
import Home from "./pages/home/Home";
import Winter from "./pages/winter/Winter";
import Slider from "./pages/slider/Slider";
import Pagination from "./pages/pagination/Pagination";
import Counter from "./pages/counter/Counter";
import NotFound from "./pages/notFound/NotFound";

import { CurrentPageContext } from "./share/context/current-page";

// redux

import "bootstrap/scss/bootstrap.scss";
import "./App.scss";
import "./share/style/grideSystem.scss";

const App = () => {
  const [active, setActiveLink] = useState("");
  const [currentPage, setCurrentPage] = useState("");
  const [navbarShrink, setNavbarShrink] = useState({});
  const [scrollButton, setScrollButton] = useState({});

  window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setScrollButton({ display: "block" });
    } else {
      setScrollButton({ display: "none" });
    }

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      setNavbarShrink({
        navbar: { padding: "30px 10px", backgroundColor: "#ffffffcc" },
        logo: { color: "#1bbc9d", fontSize: "2.1em" }
      });
    } else {
      // reset (back to old style which remove additional style)
      setNavbarShrink({});
    }
  };

  // active current page
  const setCurrentPageFun = useCallback((e) => {
    setCurrentPage(e);
  }, []);

  return (
    <CurrentPageContext.Provider
      value={{ currentPage: currentPage, setCurrentPage: setCurrentPageFun }}
    >
      <Router>
        <Header active={active} navbarShrink={navbarShrink} />
        <Switch>
          <Route path='/' exact name='home'>
            <Home setActiveLink={setActiveLink} />
          </Route>
          <Route path='/home' exact name='home'>
            <Home setActiveLink={setActiveLink} />
          </Route>
          <Route path='/winter' exact name='winter'>
            <Winter setActiveLink={setActiveLink} />
          </Route>
          <Route path='/slider' exact name='slider'>
            <Slider setActiveLink={setActiveLink} />
          </Route>
          <Route path='/pagination' exact name='pagination'>
            <Pagination scrollButton={scrollButton} setActiveLink={setActiveLink} />
          </Route>
          <Route path='/counter' exact name='counter'>
            <Counter scrollButton={scrollButton} setActiveLink={setActiveLink} />
          </Route>
          <Route path='/NotFound' exact name='notFound' component={NotFound}></Route>
          <Redirect to='/NotFound' />
        </Switch>
      </Router>
    </CurrentPageContext.Provider>
  );
};

export default App;
