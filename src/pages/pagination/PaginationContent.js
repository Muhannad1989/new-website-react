import React from "react";

const PaginationContent = ({ posts }) => {
  return (
    <ul className='list-group'>
      {posts.map((ele, index) => (
        // <li className='list-group-item' key={ele.id}>
        //   {ele.title}
        // </li>
        <div
          key={index}
          href='#'
          className='list-group-item list-group-item-action flex-column align-items-start'
        >
          <div className='d-flex w-100 justify-content-between'>
            <h5 className='mb-1'>{ele.title}</h5>
            {/* <small className='text-muted'>3 days ago</small> */}
          </div>
          <p className='mb-1'>{ele.body}</p>
          {/* <small className='text-muted'>Donec id elit non mi porta.</small> */}
        </div>
      ))}
    </ul>
  );
};

export default PaginationContent;
