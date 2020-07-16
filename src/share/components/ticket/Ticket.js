import React, { Fragment } from "react";
import "./Ticket.css";
const Ticket = () => {
  const colors = {
    orange_light: "#f6653c",
    blue_light: "#2ac4ea",
    green_light: "#77cc6d"
  };

  return (
    <Fragment>
      <Ticket className='default_ticket' style={{ backgroundColor: colors.orange_light }}>
        orange light
      </Ticket>
      <Ticket className='default_ticket' style={{ backgroundColor: colors.blue_light }}>
        blue light
      </Ticket>
      <Ticket className='default_ticket' style={{ backgroundColor: colors.green_light }}>
        green light
      </Ticket>
    </Fragment>
  );
};

export default Ticket;
