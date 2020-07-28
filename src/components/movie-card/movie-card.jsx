import React from "react";
import PropTypes from "prop-types";
import movieShape from "../../types/movie";


const MovieCard = ({movie, renderPoster, children}) => {

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
          {children}
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: movieShape,
  renderPoster: PropTypes.func,
  children: PropTypes.oneOfType(
    [
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ],
  ),
};

export default MovieCard;
