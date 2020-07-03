import React from "react";
import PropTypes from "prop-types";

const MovieCatalog = ({genres}) => {

  return (
    <>
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        <li className="catalog__genres-item catalog__genres-item--active">
          <a href="#" className="catalog__genres-link">All genres</a>
        </li>
        {genres.map((genre, index) => <li
          key={index}
          className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>)}
      </ul>
    </>
  );
};

MovieCatalog.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string)
};

export default MovieCatalog;
