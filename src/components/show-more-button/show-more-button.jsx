import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";

const ShowMoreButton = ({onClick, currentMovieListSize}) => {
  return (
    <div className="catalog__more">
      <button
        onClick={() => onClick(currentMovieListSize)}
        className="catalog__button" type="button">Show more
      </button>
    </div>
  );
};

ShowMoreButton.propTypes = {
  onClick: PropTypes.func,
  currentMovieListSize: PropTypes.number
};

const mapDispatchToProps = (dispatch) => ({
  onClick(currentMovieListSize) {
    dispatch(ActionCreator.showMoreMovies(currentMovieListSize));
  }
});

export {ShowMoreButton};
export default connect(null, mapDispatchToProps)(ShowMoreButton);

