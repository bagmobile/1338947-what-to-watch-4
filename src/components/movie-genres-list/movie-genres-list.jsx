import React from "react";
import PropTypes from "prop-types";
import {ActionCreator} from "../../reducer";
import {connect} from "react-redux";
import {getActiveGenre} from "../../selectors";


const MovieGenresList = ({genres, activeGenre, onClick}) => {

  return (
    <>
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        {genres.map((genre, index) => <li
          key={index}
          className={`catalog__genres-item ` + ((genre === activeGenre) && `catalog__genres-item--active`)}>
          <a
            onClick={() => {
              onClick(genre);
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
  onClick: PropTypes.func
};

const mapStateToProps = (state) => ({
  activeGenre: getActiveGenre(state)
});

const mapDispatchToProps = (dispatch) => ({
  onClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  }
});

export {MovieGenresList};
export default connect(mapStateToProps, mapDispatchToProps)(MovieGenresList);
