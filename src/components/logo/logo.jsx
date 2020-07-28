import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {LinkPath} from "../../consts";

const Logo = ({isLight = false}) => {

  return (
    <div className="logo">
      <Link to={LinkPath.INDEX} className={`logo__link` + (isLight ? ` logo__link--light` : ``)}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

Logo.propTypes = {
  isLight: PropTypes.bool,
};

export default Logo;
