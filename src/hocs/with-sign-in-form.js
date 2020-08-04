import React from "react";

const withSignInForm = (Component) => {

  class WithSignInForm extends React.PureComponent {

    constructor(props) {
      super(props);
      this.emailRef = React.createRef();
      this.passwordRef = React.createRef();
      this._handleFormSubmit = this._handleFormSubmit.bind(this);
    }

    _handleFormSubmit(evt, callBack) {
      evt.preventDefault();
      callBack(this.emailRef.current.value, this.passwordRef.current.value);
    }

    render() {
      return (<Component
        {...this.props}
        emailRef={this.emailRef}
        passwordRef={this.passwordRef}
        onSubmit={this._handleFormSubmit}
      />);
    }
  }

  return WithSignInForm;
};

export default withSignInForm;
