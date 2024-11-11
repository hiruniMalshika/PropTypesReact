import React from "react";
import PropTypes from "prop-types";

function Greetings({ isLoggedIn }) {
  return (
    <div>{isLoggedIn ? <h2>Welcome back! </h2> : <h2>Please log in</h2>}</div>
  );
}
Greetings.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};
export default Greetings;
