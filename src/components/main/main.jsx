import React from "react";
import PropTypes from "prop-types";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block.connect";
import MovieCard from "../movie-card/movie-card";
import MovieHeader from "../movie-header/movie-header";
import MoviePoster from "../movie-poster/movie-poster";
import Copyright from "../copyright/copyright";
import MovieGenresList from "../movie-genres-list/movie-genres-list";
import MoviesList from "../movies-list/movies-list";
import ShowMoreButton from "../show-more-button/show-more-button";
import movieShape from "../../types/movie";
import MenuButton from "../menu-button/menu-button";
import Spinner from "react-spinner-material";


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
    onFavoriteToggle,
  } = props;

  if (isFetchingData) {
    return (<Spinner/>);
  }

  const backgroundColor = promoMovie.backgroundColor;

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
          <MenuButton movie={promoMovie} onFavoriteToggle={onFavoriteToggle}/>
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
  onFavoriteToggle: PropTypes.func,
};

export default Main;

