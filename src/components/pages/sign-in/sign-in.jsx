import {Redirect} from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import Logo from "../../logo/logo";
import {LinkPath} from "../../../consts";
import Spinner from "react-spinner-material";

const SignIn = (props) => {
  const {isAuthorized, errorMessage, isFetching, requireAuthorization, emailRef, passwordRef, onSubmit} = props;

  if (isFetching) {
    return (<Spinner/>);
  }

  if (isAuthorized) {
    return <Redirect to={LinkPath.INDEX}/>;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form
          action="#"
          className="sign-in__form"
          onSubmit={(evt) => {
            onSubmit(evt, requireAuthorization);
          }
          }>
          <div className="sign-in__message">
            <p>{errorMessage}</p>
          </div>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={emailRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );

};

SignIn.propTypes = {
  isAuthorized: PropTypes.bool,
  errorMessage: PropTypes.string,
  requireAuthorization: PropTypes.func,
  isFetching: PropTypes.bool,
  emailRef: PropTypes.object,
  passwordRef: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default SignIn;
