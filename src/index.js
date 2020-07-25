import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducer/reducer";
import {createAPI} from "./api";
import thunk from "redux-thunk";
import {ActionCreator, AuthorizationStatus} from "./reducer/user/user";
import {composeWithDevTools} from "redux-devtools-extension";
import withLoader from "./hocs/with-loader";

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const WrappedApp = withLoader(App);

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

ReactDOM.render(
    <Provider store={store}>
      <WrappedApp/>
    </Provider>,
    document.querySelector(`#root`)
);
