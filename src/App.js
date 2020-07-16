import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Header from "./share/components/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Slider from "./pages/slider/Slider";
import Pagination from "./pages/pagination/Pagination";
import NotFound from "./pages/notFound/NotFound";
import "./App.scss";
import "./share/style/grideSystem.scss";
import "bootstrap/scss/bootstrap.scss";

const App = () => {
  const [active, setActive] = useState(null);
  const setActiveLink = (e) => {
    setActive(e);
    console.log("running");
  };
  return (
    <Router>
      <Header active={active} />
      <Switch>
        <Route path='/' exact name='home' component={Home}></Route>
        <Route path='/home' exact name='home' component={Home}></Route>
        <Route path='/about' exact name='about' component={About}></Route>
        <Route
          path='/slider'
          exact
          name='slider'
          setActiveLink={() => setActiveLink("dd")}
          component={Slider}
        ></Route>
        <Route path='/pagination' exact name='pagination' component={Pagination}></Route>
        <Route path='/NotFound' exact name='notFound' component={NotFound}></Route>
        <Redirect to='/NotFound' />
      </Switch>
    </Router>
  );
};

export default App;
