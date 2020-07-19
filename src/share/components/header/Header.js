import React, { useContext } from "react";

import { CurrentPageContext } from "../../context/current-page";

import CustomLink from "./CustomLink";
import "./Header.scss";

const Header = ({ active }) => {
  const current = useContext(CurrentPageContext);
  // log current page name
  console.log(`current page is : ${current.currentPage}`);
  const links = ["home", "winter", "slider", "pagination"];
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='brand'>
          <h2>Classic</h2>
        </div>
        <ul className='links'>
          {links.map((ele, index) => (
            <CustomLink key={index} checker={current.currentPage} name={ele} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
