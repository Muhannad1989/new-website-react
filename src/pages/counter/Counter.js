import React, { Fragment, useEffect, useContext } from "react";
import { CurrentPageContext } from "../../share/context/current-page";

import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  // state
  const counter = useSelector((state) => state.counter);
  // dispatch actions
  const dispatch = useDispatch();

  const current = useContext(CurrentPageContext);
  useEffect(() => {
    current.setCurrentPage("pagination");
  }, []);

  return (
    <Fragment>
      <div className='container'>
        <h2>Counter using redux</h2>
        <button onClick={() => dispatch({ type: "INCREMENT" })} className='btn btn-primary'>
          increment
        </button>
        <h3>
          <span class='badge badge-secondary'>{counter}</span>
        </h3>

        <button onClick={() => dispatch({ type: "DECREMENT" })} className='btn btn-danger'>
          decrement
        </button>
      </div>
    </Fragment>
  );
};

export default Counter;
