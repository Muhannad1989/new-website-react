import React, { useContext } from "react";

import { CurrentPageContext } from "../../context/current-page";

import CustomLink from "./CustomLink";
import "./Header.scss";

const Header = ({ active, navbarShrink: { logo, navbar } }) => {
  const current = useContext(CurrentPageContext);
  // log current page name
  console.log(`current page is : ${current.currentPage}`);
  console.log({ logo, navbar });

  const links = ["home", "winter", "slider", "pagination"];
  return (
    <div className='navbar' style={navbar}>
      <div className='container'>
        <div className='brand'>
          <h2 style={logo}>Classic</h2>
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
