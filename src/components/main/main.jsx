import React from "react";
import PropTypes from "prop-types";
import MoviesList from "../movies-list/movies-list.jsx";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import Logo from "../logo/logo.jsx";
import UserBlock from "../user-block/user-block.jsx";
import MovieCard from "../movie-card/movie-card.jsx";
import MovieCatalog from "../movie-catalog/movie-catalog.jsx";
import {genres} from "../../settings.js";
import MovieHeader from "../movie-header/movie-header.jsx";
import MoviePoster from "../movie-poster/movie-poster.jsx";
import Copyright from "../copyright/copyright.jsx";
import ShowMoreButton from "../show-more-button/show-more-button.jsx";

const Main = ({movies = [], promoMovie, onSmallMovieCardClick}) => {

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
          poster={() => <MoviePoster movie={promoMovie}/>}
        />
      </section>

      <div className="page-content">
        <section className="catalog">

          <MovieCatalog genres={genres}/>

          <MoviesList
            movies={movies}
            onSmallMovieCardClick={onSmallMovieCardClick}
          />

          <ShowMoreButton/>
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
  movies: MoviesList.propTypes.movies,
  promoMovie: SmallMovieCard.propTypes.movie,
  onSmallMovieCardClick: PropTypes.func
};

export default Main;
