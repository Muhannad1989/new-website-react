import React from "react";

const PaginationContent = ({ posts }) => {
  return (
    <ul className='list-group'>
      {posts.map((ele) => (
        // <li className='list-group-item' key={ele.id}>
        //   {ele.title}
        // </li>
        <div href='#' class='list-group-item list-group-item-action flex-column align-items-start'>
          <div class='d-flex w-100 justify-content-between'>
            <h5 class='mb-1'>{ele.title}</h5>
            {/* <small class='text-muted'>3 days ago</small> */}
          </div>
          <p class='mb-1'>{ele.body}</p>
          {/* <small class='text-muted'>Donec id elit non mi porta.</small> */}
        </div>
      ))}
    </ul>
  );
};

export default PaginationContent;
