import React, {PureComponent} from "react";
import {Route, Router, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "../main/main.connect";
import MovieInfo from "../movie-info/movie-info.connect";
import {LinkPath} from "../../consts";
import SignIn from "../sign-in/sign-in.connect";
import FavoriteMovies from "../favorite-movies/favorite-movies.connect";
import PrivateRoute from "../private-route/private-route.connect";
import MovieFullScreen from "../movie-full-screen/movie-full-screen.connect";
import history from "../../history";

class App extends PureComponent {

  componentDidMount() {
    this.props.init();
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={LinkPath.INDEX} component={Main}/>
          <Route exact path={`${LinkPath.VIEW_MOVIE}/:id`} component={MovieInfo}/>
          <Route exact path={LinkPath.LOGIN} component={SignIn}/>
          <PrivateRoute exact path={LinkPath.FAVORITE_MOVIES} component={FavoriteMovies}/>
          <Route exact path={`${LinkPath.PLAYER}/:id`} component={MovieFullScreen}/>
        </Switch>
      </Router>
    );
  }

}

App.propTypes = {
  init: PropTypes.func.isRequired,
};

export default App;

