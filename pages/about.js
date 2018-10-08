import React, { Component } from 'react';
import withUsefulFeatures from "../components/withUsefulFeatures";
import Simple from "../components/Simple";

class About extends Component {
  state = { click: 0 }

  static async getInitialProps({ req, res, usefulFeatures, args, ...restInInitialProps }) {
    console.log({restInInitialProps});

    return {
      fromInitialProps: "This is About Page",
      usefulFeatures,
      args
    }
  }

  render() {
    const { fromInitialProps, ...restInRender } = this.props;

    console.log({restInRender});

    return (
      <div>
        <div>
        {fromInitialProps}
        </div>
        <Simple />
      </div>
    );
  }
}

export default withUsefulFeatures({
  p: "pretty",
  q: "cute"
})(About);
