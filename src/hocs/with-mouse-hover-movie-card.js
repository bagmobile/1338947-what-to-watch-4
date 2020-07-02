import React, {PureComponent} from "react";

export default function withMouseHoverMovieCard(Component) {

  return class WithMouseHoverMovieCard extends PureComponent {

    constructor(props) {
      super(props);

      this.state = {
        isHovered: false
      };

      this._timeout = null;
      this._handleMouseHover = this._handleMouseHover.bind(this);
    }

    _handleMouseHover(currentMovie) {

      clearTimeout(this._timeout);
      if (currentMovie) {
        this._timeout = setTimeout(() => {
          this.setState({isHovered: true});
        }, 1000);
      } else {
        this.setState({isHovered: false});
      }

    }

    componentWillUnmount() {
      clearTimeout(this._timeout);
    }

    render() {
      return (
        <Component
          {...this.props}
          isPlaying={this.state.isHovered}
          onMouseHover={this._handleMouseHover}
        />
      );
    }
  };
}
