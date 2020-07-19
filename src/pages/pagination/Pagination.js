import React, { useEffect, useState, Fragment, useContext } from "react";
import axios from "axios";
import Container from "../../share/components/container/Container";
import PaginationContent from "./PaginationContent";
import PaginationButtons from "./PaginationButtons";
import { CurrentPageContext } from "../../share/context/current-page";
import "./Pagination.scss";

const Pagination = ({ setActiveLink, scrollButton }) => {
  const current = useContext(CurrentPageContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [posts, setPosts] = useState([]);

  const lastPost = currentPage * postsPerPage;
  const firstPost = lastPost - postsPerPage;
  const currentPosts = posts.slice(firstPost, lastPost);
  useEffect(() => {
    fetchData();
    setActiveLink("pagination");
    current.setCurrentPage("pagination");
  }, [setActiveLink]);

  const url = "https://jsonplaceholder.typicode.com/posts";

  const fetchData = async () => {
    const res = await axios.get(url);
    setPosts(res.data);
  };
  const paginate = (num) => {
    setCurrentPage(num);
  };

  return (
    <Container>
      <div>
        {posts.length > 0 ? (
          <Fragment>
            <button
              onClick={() => {
                // document.body.scrollTop = 0;
                // document.documentElement.scrollTop = 0;
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className='scroll-up'
              style={scrollButton}
            >
              Scroll up
            </button>
            <PaginationContent posts={currentPosts} />
            <PaginationButtons
              currentPosts={currentPosts}
              totalPosts={posts.length}
              postsPerPage={postsPerPage}
              paginate={paginate}
            />
          </Fragment>
        ) : (
          <p>there is no data </p>
        )}
      </div>
    </Container>
  );
};

export default Pagination;
