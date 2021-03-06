import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.connect.js";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducer/reducer";
import {createAPI} from "./api";
import thunk from "redux-thunk";
import {ActionCreator} from "./reducer/user/user";
import {composeWithDevTools} from "redux-devtools-extension";
import {APIPath, AuthorizationStatus} from "./consts";
import history from "./history";

const onUnauthorized = (error) => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
  if (error.config.url !== APIPath.LOGIN) {
    history.push(APIPath.LOGIN);
  }
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
