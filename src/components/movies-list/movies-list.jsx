import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import movieShape from "../movie/movie-shape.js";
import withMouseHoverMovieCard from "../../hocs/with-mouse-hover-movie-card.js";
import {DEFAULT_MOVIE_LIST_SIZE} from "../../settings";

const SmallMovieCardWrapped = withMouseHoverMovieCard(SmallMovieCard);

const MoviesList = (props) => {

  const {movies = [], onSmallMovieCardClick, listSize = DEFAULT_MOVIE_LIST_SIZE, genre} = props;

  const prepareMovies = () => {

    return movies.filter((movie) => {
      return genre ? movie.genre === genre : true;
    }).slice(0, listSize);
  };

  return (
    <div className="catalog__movies-list">
      {prepareMovies(movies).map((movie, index) => (
        <SmallMovieCardWrapped
          key={index}
          movie={movie}
          onClick={onSmallMovieCardClick}
        />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieShape),
  onSmallMovieCardClick: PropTypes.func,
  listSize: PropTypes.number,
  genre: PropTypes.string
};

export default MoviesList;
