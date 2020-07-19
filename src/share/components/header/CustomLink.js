import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ checker, name }) => {
  return (
    <li className={checker === name ? "active" : ""}>
      <Link to={"/" + name} data-value={name}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Link>
    </li>
  );
};

export default CustomLink;
