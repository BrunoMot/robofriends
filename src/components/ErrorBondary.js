import React, { Component } from "react";

export class ErrorBondary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>whoops. that is not good.</h1>;
    }
    return <div>{this.props.children}</div>;
  }
}

export default ErrorBondary;
