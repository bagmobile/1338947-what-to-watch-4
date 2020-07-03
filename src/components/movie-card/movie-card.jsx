import MenuButton from "../menu-button/menu-button.jsx";
import React from "react";
import PropTypes from "prop-types";
import movieShape from "../movie/movie-shape";


const MovieCard = ({movie, poster, addReviewButton}) => {

  return (
    <div className="movie-card__wrap">
      <div className="movie-card__info">
        {poster && poster()}
        <div className="movie-card__desc">
          <h2 className="movie-card__title">{movie.title}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{movie.genre}</span>
            <span className="movie-card__year">{movie.year}</span>
          </p>
          <MenuButton>
            {addReviewButton && addReviewButton()}
          </MenuButton>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: movieShape,
  poster: PropTypes.func,
  addReviewButton: PropTypes.func
};

export default MovieCard;
