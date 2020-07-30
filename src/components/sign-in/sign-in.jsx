import {Redirect} from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import Logo from "../logo/logo";
import {LinkPath} from "../../consts";

class SignIn extends React.PureComponent {

  constructor(props) {
    super(props);

    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(evt) {
    evt.preventDefault();
    this.props.requireAuthorization(this.emailRef.current.value, this.passwordRef.current.value);
  }

  render() {
    const {isAuthorized, errorMessage} = this.props;

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
          <form action="#" className="sign-in__form" onSubmit={this.onSubmit} noValidate={true}>
            <div className="sign-in__message">
              <p>{errorMessage}</p>
            </div>
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  ref={this.emailRef}
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address" name="user-email"
                  id="user-email"
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input
                  ref={this.passwordRef}
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
  }
}

SignIn.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  requireAuthorization: PropTypes.func.isRequired,
};

export default SignIn;
