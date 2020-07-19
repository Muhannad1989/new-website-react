import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Header from "./share/components/header/Header";
import Home from "./pages/home/Home";
import Winter from "./pages/winter/Winter";
import Slider from "./pages/slider/Slider";
import Pagination from "./pages/pagination/Pagination";
import NotFound from "./pages/notFound/NotFound";

import { CurrentPageContext } from "./share/context/current-page";

import "bootstrap/scss/bootstrap.scss";
import "./App.scss";
import "./share/style/grideSystem.scss";

const App = () => {
  const [active, setActiveLink] = useState("");
  const [currentPage, setCurrentPage] = useState("");

  const setCurrentPageFun = useCallback((e) => {
    setCurrentPage(e);
  }, []);

  return (
    <CurrentPageContext.Provider
      value={{ currentPage: currentPage, setCurrentPage: setCurrentPageFun }}
    >
      <Router>
        <Header active={active} />
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
            <Pagination setActiveLink={setActiveLink} />
          </Route>
          <Route path='/NotFound' exact name='notFound' component={NotFound}></Route>
          <Redirect to='/NotFound' />
        </Switch>
      </Router>
    </CurrentPageContext.Provider>
  );
};

export default App;
