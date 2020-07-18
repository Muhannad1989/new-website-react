import React from "react";
// import Container from "../../components/container/Container";
import { Link } from "react-router-dom";
import "./Header.scss";
const Header = ({ active }) => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='brand'>
          <h2>Classic</h2>
        </div>
        <ul className='links'>
          <li className={active === "home" ? "active" : ""}>
            <Link to='/' data-value='home'>
              Home
            </Link>
          </li>
          <li className={active === "winter" ? "active" : ""}>
            <Link to='/winter' data-value='winter'>
              Winter
            </Link>
          </li>
          <li className={active === "slider" ? "active" : ""}>
            <Link to='/slider' data-value='slider'>
              Slider
            </Link>
          </li>
          <li className={active === "pagination" ? "active" : ""}>
            <Link to='/pagination' data-value='pagination'>
              Pagination
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
