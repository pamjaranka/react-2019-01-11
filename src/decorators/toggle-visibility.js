import React, {Component} from 'react';

export default (OriginalComponent) =>
  class DecoratedComponent extends Component {
    state = {
      isShown: false
    };

    toggleVisibility = () => this.setState({isShown: !this.state.isShown});

    render() {
      return <OriginalComponent
        {...this.props}
        {...this.state}
        toggleVisibility={this.toggleVisibility}
      />;
    }
  }