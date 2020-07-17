import React from "react";
import PropTypes from "prop-types";
import {DEFAULT_GENRE} from "../../selectors";


const MovieGenresList = ({genres, activePage = DEFAULT_GENRE, onClick, onChangeGenre}) => {

  return (
    <>
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        {genres.map((genre, index) => <li
          key={index}
          className={`catalog__genres-item ` + ((genre === activePage) && `catalog__genres-item--active`)}>
          <a
            onClick={(evt) => {
              evt.preventDefault();
              if (activePage !== genre) {
                onClick(genre);
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
  activePage: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onChangeGenre: PropTypes.func
};

export default MovieGenresList;
