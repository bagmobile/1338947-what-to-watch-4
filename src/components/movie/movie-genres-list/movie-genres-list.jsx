import React from "react";
import PropTypes from "prop-types";
import {DEFAULT_GENRE} from "../../../consts";


const MovieGenresList = ({genres, activeGenre = DEFAULT_GENRE, onChangeGenre}) => {

  return (
    <>
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        {genres.map((genre, index) => <li
          key={index}
          className={`catalog__genres-item ` + ((genre === activeGenre) && `catalog__genres-item--active`)}>
          <a
            onClick={(evt) => {
              evt.preventDefault();
              if (activeGenre !== genre) {
                onChangeGenre(genre);
              }
            }}
            href="#"
            className="catalog__genres-link">{genre}</a>
        </li>)}
      </ul>
    </>
  );

};

MovieGenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onChangeGenre: PropTypes.func
};

export default MovieGenresList;
