import React from "react";
import PropTypes from "prop-types";
import {ActionCreator} from "../../reducer";
import {connect} from "react-redux";


const MovieGenresList = ({genres, activeGenre, onClick}) => {

  return (
    <>
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        {genres.map((genre, index) => <li
          key={index}
          className={`catalog__genres-item ` + ((genre === activeGenre) && `catalog__genres-item--active`)}>
          <a
            onClick={onClick}
            href="#"
            className="catalog__genres-link">{genre}</a>
        </li>)}
      </ul>
    </>
  );

};

MovieGenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  activeGenre: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

const mapStateToProps = (state) => ({
  activeGenre: state.activeGenre
});

const mapDispatchToProps = (dispatch) => ({
  onClick(evt) {
    dispatch(ActionCreator.changeGenre(evt.target.text));
    dispatch(ActionCreator.filterMovies(evt.target.text));
  }
});

export {MovieGenresList};
export default connect(mapStateToProps, mapDispatchToProps)(MovieGenresList);
