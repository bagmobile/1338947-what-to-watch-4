import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import movieShape from "../movie/movie-shape.js";
import withMouseHoverMovieCard from "../../hocs/with-mouse-hover-movie-card.js";

const DEFAULT_MOVIE_LIST_SIZE = 8;
export const MOVIE_LIST_BY_GENRE_SIZE = 4;

const SmallMovieCardWrapped = withMouseHoverMovieCard(SmallMovieCard);

const MoviesList = (props) => {

  const {movies = [], listSize = DEFAULT_MOVIE_LIST_SIZE} = props;

  return (
    <div className="catalog__movies-list">
      {movies.slice(0, listSize).map((movie, index) => (
        <SmallMovieCardWrapped
          key={index}
          movie={movie}
        />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieShape),
  onClick: PropTypes.func,
  listSize: PropTypes.number,
};

const mapStateToProps = (state) => ({
  movies: state.movies
});

export {MoviesList};
export default connect(mapStateToProps)(MoviesList);
