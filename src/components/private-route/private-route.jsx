import {Redirect, Route} from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import {LinkPath} from "../../consts";

const PrivateRoute = (props) => {
  const {isAuthorized} = props;
  console.log(isAuthorized);
  if (isAuthorized) {
    return <Route {...props}/>;
  }
  return <Redirect to={LinkPath.LOGIN}/>;
};

PrivateRoute.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
};

export default PrivateRoute;
