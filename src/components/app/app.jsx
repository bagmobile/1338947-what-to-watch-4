import React, {PureComponent} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import {PromoMovie} from "../../mocks/promo-movie.js";
import MovieInfo from "../movie-info/movie-info.jsx";
import {connect} from "react-redux";
import movieShape from "../movie/movie-shape";
import MovieGenresList from "../movie-genres-list/movie-genres-list.jsx";
import {genres} from "../../mocks/movies";
import MoviesList, {MOVIE_LIST_BY_GENRE_SIZE} from "../movies-list/movies-list.jsx";

class App extends PureComponent {

  _renderMain() {
    return (
      <Main promoMovie={PromoMovie}>
        <MovieGenresList genres={genres}/>
        <MoviesList/>
      </Main>);
  }

  _renderMovieInfo() {
    return (
      <MovieInfo>
        <MoviesList listSize={MOVIE_LIST_BY_GENRE_SIZE}/>
      </MovieInfo>
    );
  }

  render() {
    return (<BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this.props.movie ? this._renderMovieInfo() : this._renderMain()}
        </Route>
        <Route exact path="/movie-info">
          {this._renderMovieInfo()}
        </Route>
      </Switch>
    </BrowserRouter>);
  }

}

App.propTypes = {
  movie: movieShape,
  promoMovie: movieShape
};

const mapStateToProps = (state) => ({
  movie: state.activeMovie,
  promoMovie: state.promoMovie
});

export {App};
export default connect(mapStateToProps)(App);
