import React from "react";
import PropTypes from "prop-types";

const ShowMoreButton = ({onClick}) => {
  return (
    <div className="catalog__more">
      <button
        onClick={onClick}
        className="catalog__button" type="button">Show more
      </button>
    </div>
  );
};

ShowMoreButton.propTypes = {
  onClick: PropTypes.func
};

export default ShowMoreButton;


