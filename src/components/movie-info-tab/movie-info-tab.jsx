import React from "react";
import PropTypes from "prop-types";
import {Tab} from "../../settings.js";

const MovieInfoTab = ({activeTab = Tab.OVERVIEW, onClickTab}) => {

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {Object.keys(Tab).map((key, index) => {
          const activeTabClass = (activeTab === Tab[key]) && `movie-nav__item--active`;
          return (
            <li
              key={`nav-` + index}
              onClick={()=> (activeTab !== Tab[key]) && onClickTab(Tab[key])}
              className={`movie-nav__item  ${activeTabClass}`}>
              <a href="#" className="movie-nav__link">{Tab[key]}</a>
            </li>);
        }
        )}
      </ul>
    </nav>
  );
};

MovieInfoTab.propTypes = {
  activeTab: PropTypes.oneOf(Object.values(Tab)),
  onClickTab: PropTypes.func
};

export default MovieInfoTab;
