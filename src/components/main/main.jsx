import React from "react";
import PropTypes from "prop-types";
import Logo from "../logo/logo.jsx";
import UserBlock from "../user-block/user-block.connect";
import MovieCard from "../movie-card/movie-card.jsx";
import MovieHeader from "../movie-header/movie-header.jsx";
import MoviePoster from "../movie-poster/movie-poster.jsx";
import Copyright from "../copyright/copyright.jsx";
import MovieGenresList from "../movie-genres-list/movie-genres-list.jsx";
import MoviesList from "../movies-list/movies-list.jsx";
import ShowMoreButton from "../show-more-button/show-more-button.jsx";
import movieShape from "../../types/movie";
import MenuButton from "../menu-button/menu-button.jsx";


const Main = (props) => {
  const {
    promoMovie,
    movies,
    genres,
    isVisibleShowMoreButton,
    onShowMoreButtonClick,
    onChangeGenre,
    activeGenre,
    isFetchingData,
    toggleFavorite,
  } = props;

  if (isFetchingData) {
    return (`Please wait ...`);
  }

  const {backgroundColor} = promoMovie.backgroundColor;

  return (

    <React.Fragment>
      <section className="movie-card" style={{backgroundColor}}>

        <MovieHeader movie={promoMovie}/>

        <header className="page-header movie-card__head">
          <Logo/>
          <UserBlock/>
        </header>

        <MovieCard
          movie={promoMovie}
          renderPoster={() => <MoviePoster movie={promoMovie}/>}
        >
          <MenuButton movieId={promoMovie.id} isFavorite={promoMovie.isFavorite} toggleFavorite={toggleFavorite}/>
        </MovieCard>
      </section>

      <div className="page-content">
        <section className="catalog">

          <MovieGenresList
            genres={genres}
            activeGenre={activeGenre}
            onChangeGenre={onChangeGenre}/>
          <MoviesList movies={movies}/>
          {isVisibleShowMoreButton && <ShowMoreButton onClick={onShowMoreButtonClick}/>}

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
  movies: PropTypes.arrayOf(movieShape),
  genres: PropTypes.arrayOf(PropTypes.string),
  activeGenre: PropTypes.string,
  promoMovie: movieShape,
  currentMovieListSize: PropTypes.number,
  isVisibleShowMoreButton: PropTypes.bool,
  onShowMoreButtonClick: PropTypes.func,
  onChangeGenre: PropTypes.func,
  isFetchingData: PropTypes.bool,
  toggleFavorite: PropTypes.func,
};

export default Main;

