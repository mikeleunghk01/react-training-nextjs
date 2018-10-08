import React, { Component } from 'react';
import withUsefulFeatures from "../components/withUsefulFeatures";

class About extends Component {
  state = { click: 0 }

  static async getInitialProps({ req, res, ...rest }) {
    console.log({rest});

    return {
      fromInitialProps: "This is About Page"
    }
  }

  render() {
    const { fromInitialProps } = this.props;

    return (<div>{fromInitialProps}</div>);
  }
}

export default withUsefulFeatures({
  p: "pretty",
  q: "cute"
})(About);
