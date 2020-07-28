import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const MenuButton = ({isFavorite, movieId, children, toggleFavorite}) => {

  return (
    <div className="movie-card__buttons">
      <Link to={`/player/`} className="btn btn--play movie-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"/>
        </svg>
        <span>Play</span>
      </Link>
      <button onClick={()=>{toggleFavorite(movieId)}}
        className="btn btn--list movie-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          {isFavorite ? <use xlinkHref="#in-list"/> : <use xlinkHref="#add"/>}
        </svg>
        <span>My list</span>
      </button>
      {children}
    </div>
  );
};

MenuButton.propTypes = {
  movieId: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  children: PropTypes.oneOfType(
      [
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
      ]),
};

export default MenuButton;
