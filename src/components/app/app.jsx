import React, {PureComponent} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import MovieInfo from "../movie-info/movie-info.jsx";

class App extends PureComponent {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main}>
          </Route>
          <Route exact path="/movies/:id" component={MovieInfo}>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

}

export default App;

