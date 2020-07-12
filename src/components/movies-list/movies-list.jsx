import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import movieShape from "../movie/movie-shape.js";
import withMouseHoverMovieCard from "../../hocs/with-mouse-hover-movie-card.js";

const SmallMovieCardWrapped = withMouseHoverMovieCard(SmallMovieCard);

const MoviesList = (props) => {

  const {children, movies = []} = props;

  return (
    <>
      {movies.length > 0 && children}
      <div className="catalog__movies-list">
        {movies.map((movie, index) => (
          <SmallMovieCardWrapped
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

