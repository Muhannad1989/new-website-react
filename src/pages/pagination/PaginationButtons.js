import React from "react";
import { Link } from "react-router-dom";
import "./Pagination.scss";

const PaginationButton = ({ totalPosts, postsPerPage, paginate }) => {
  let pageNumber = [];
  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <ul className='pagination'>
      {pageNumber.map((num, index) => (
        <li key={index} className='page-item'>
          <Link onClick={() => paginate(num)} className='page-link'>
            {num}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PaginationButton;
