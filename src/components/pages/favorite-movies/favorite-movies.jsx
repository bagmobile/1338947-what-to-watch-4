import React from "react";
import PropTypes from "prop-types";
import Logo from "../../logo/logo";
import UserBlock from "../../user-block/user-block.connect";
import MoviesList from "../../movie/movies-list/movies-list";
import movieShape from "../../../types/movie";

class FavoriteMovies extends React.PureComponent {

  componentDidMount() {
    this.props.loadFavoriteMovies();
  }

  render() {
    const {movies, isLoadMoviesStatusFetching} = this.props;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo/>
          <h1 className="page-title user-page__title">My list</h1>
          <UserBlock/>
        </header>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <MoviesList movies={movies} isLoadMoviesStatusFetching={isLoadMoviesStatusFetching}/>
        </section>
        <footer className="page-footer">
          <Logo isLight={true}/>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    );
  }
}

FavoriteMovies.propTypes = {
  loadFavoriteMovies: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(movieShape).isRequired,
  isLoadMoviesStatusFetching: PropTypes.bool
};

export default FavoriteMovies;
