import React, {PureComponent} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import MovieInfo from "../movie-info/movie-info.jsx";
import {connect} from "react-redux";
import movieShape from "../movie/movie-shape";
import MovieGenresList from "../movie-genres-list/movie-genres-list.jsx";
import MoviesList from "../movies-list/movies-list.jsx";
import PropTypes from "prop-types";
import {getFilteredMoviesByGenre, getMoviesGenres, getPromoMovie} from "../../selectors";

class App extends PureComponent {

  _renderMain() {

    return (
      <Main promoMovie={this.props.promoMovie}>
        <MovieGenresList genres={this.props.genres}/>
        <MoviesList movies={this.props.movies}/>
      </Main>);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMain()}
          </Route>
          <Route exact path="/movies/:id" component={MovieInfo}>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

}

App.propTypes = {
  movies: PropTypes.arrayOf(movieShape),
  genres: PropTypes.arrayOf(PropTypes.string),
  promoMovie: movieShape
};

const mapStateToProps = (state) => ({
  movies: getFilteredMoviesByGenre(state),
  genres: getMoviesGenres(state),
  promoMovie: getPromoMovie(state)
});

export {App};
export default connect(mapStateToProps)(App);
