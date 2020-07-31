import React from "react";
import PropTypes from "prop-types";
import MovieSmallCard from "../movie-small-card/movie-small-card";
import withMouseHoverMovieCard from "../../../hocs/with-mouse-hover-movie-card.js";
import movieShape from "../../../types/movie";

const MovieSmallCardWrapped = withMouseHoverMovieCard(MovieSmallCard);

const MoviesList = (props) => {

  const {children, movies = []} = props;

  return (
    <>
      {movies.length > 0 && children}
      <div className="catalog__movies-list">
        {movies.map((movie, index) => (
          <MovieSmallCardWrapped
            key={index}
            movie={movie}
          />
        ))}
      </div>
    </>
  );
};

MoviesList.propTypes = {
  children: PropTypes.oneOfType(
      [
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
      ]),
  movies: PropTypes.arrayOf(movieShape)
};

export default MoviesList;

