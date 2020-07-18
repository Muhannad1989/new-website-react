import React from "react";
import Container from "../../components/container/Container";
import { Link } from "react-router-dom";
import "./Header.scss";
const Header = ({ active }) => {
  console.log("*********");
  console.log(active);
  console.log("*********");
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='brand'>
          <h2>Classic</h2>
        </div>
        <ul className='links'>
          <li className='active'>
            <Link to='/' data-value='home'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/winter' data-value='winter'>
              Winter
            </Link>
          </li>
          <li>
            <Link to='/slider' data-value='slider'>
              Slider
            </Link>
          </li>
          <li>
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
