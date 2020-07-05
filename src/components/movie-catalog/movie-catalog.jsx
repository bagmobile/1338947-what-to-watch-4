import React from "react";
import PropTypes from "prop-types";

const MovieCatalog = ({genres, activeGenre = genres[0]}) => {
  return (
    <>
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        {genres.map((genre, index) => <li
          key={index}
          className={`catalog__genres-item ` + ((genre === activeGenre) && `catalog__genres-item--active`)}>
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>)}
      </ul>
    </>
  );
};

MovieCatalog.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  activeGenre: PropTypes.string
};

export default MovieCatalog;
