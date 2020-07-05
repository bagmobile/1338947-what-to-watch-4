import MenuButton from "../menu-button/menu-button.jsx";
import React from "react";
import PropTypes from "prop-types";
import movieShape from "../movie/movie-shape";


const MovieCard = ({movie, renderPoster, renderReviewButton}) => {

  return (
    <div className="movie-card__wrap">
      <div className="movie-card__info">
        {renderPoster && renderPoster()}
        <div className="movie-card__desc">
          <h2 className="movie-card__title">{movie.title}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{movie.genre}</span>
            <span className="movie-card__year">{movie.year}</span>
          </p>
          <MenuButton>
            {renderReviewButton && renderReviewButton()}
          </MenuButton>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: movieShape,
  renderPoster: PropTypes.func,
  renderReviewButton: PropTypes.func
};

export default MovieCard;
