import React, {PureComponent} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import MovieInfo from "../movie-info/movie-info.jsx";
import {LinkPath} from "../../consts";
import SignIn from "../sign-in/sign-in.connect";
import FavoriteMovies from "../favorite-movies/favorite-movies.connect";
import PrivateRoute from "../private-route/private-route.connect";

class App extends PureComponent {

  componentDidMount() {
    this.props.init();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={LinkPath.INDEX} component={Main}/>
          <Route exact path={LinkPath.VIEW_MOVIE} component={MovieInfo}/>
          <Route exact path={LinkPath.LOGIN} component={SignIn}/>
          <PrivateRoute exact path={LinkPath.FAVORITE_MOVIES} component={FavoriteMovies}/>
        </Switch>
      </BrowserRouter>
    );
  }

}

App.propTypes = {
  init: PropTypes.func.isRequired
};

export default App;

