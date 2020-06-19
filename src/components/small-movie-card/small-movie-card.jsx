import React from 'react';
import PropTypes from 'prop-types';

const SmallMovieCard = ({movie, onClick, onMouseHover}) => {

  return (
    <article
      onMouseEnter={() => {
        onMouseHover(movie);
      }}
      onMouseLeave={() => {
        onMouseHover(null);
      }}
      className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={movie.poster} alt={movie.title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a
          onClick={onClick}
          className="small-movie-card__link" href="movie-page.html">{movie.title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string,
    poster: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }),
  onClick: PropTypes.func,
  onMouseHover: PropTypes.func
};

export default SmallMovieCard;
