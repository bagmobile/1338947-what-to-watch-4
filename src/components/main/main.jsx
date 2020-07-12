import React from "react";
import PropTypes from "prop-types";
import Logo from "../logo/logo.jsx";
import UserBlock from "../user-block/user-block.jsx";
import MovieCard from "../movie-card/movie-card.jsx";
import MovieHeader from "../movie-header/movie-header.jsx";
import MoviePoster from "../movie-poster/movie-poster.jsx";
import Copyright from "../copyright/copyright.jsx";
import movieShape from "../movie/movie-shape";

const Main = ({promoMovie, children}) => {

  return (
    <React.Fragment>
      <section className="movie-card">

        <MovieHeader movie={promoMovie}/>

        <header className="page-header movie-card__head">
          <Logo/>
          <UserBlock/>
        </header>

        <MovieCard
          movie={promoMovie}
          renderPoster={() => <MoviePoster movie={promoMovie}/>}
        />
      </section>

      <div className="page-content">
        <section className="catalog">

          {children}

        </section>

        <footer className="page-footer">
          <Logo/>
          <Copyright/>
        </footer>

      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  children: PropTypes.oneOfType(
      [
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
      ]
  ),
  promoMovie: movieShape
};

export default Main;

