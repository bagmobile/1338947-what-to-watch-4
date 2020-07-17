import React from "react";
import PropTypes from "prop-types";

const withActivePage = (Component) => {

  class WithActivePage extends React.PureComponent {

    constructor(props) {
      super(props);

      this.state = {activePage: props.initialActivePage};
      this._handlePageClick = this._handlePageClick.bind(this);
    }

    _handlePageClick(page) {
      this.setState({activePage: page});
    }

    render() {
      return (
        <Component
          {...this.props}
          activePage={this.state.activePage}
          onClick={this._handlePageClick}
        >
        </Component>
      );
    }

  }

  WithActivePage.propTypes = {
    initialActivePage: PropTypes.string
  };

  return WithActivePage;
};

export default withActivePage;
