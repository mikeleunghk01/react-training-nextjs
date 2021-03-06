import React, { PureComponent } from 'react';
import withUsefulFeatures from "../components/withUsefulFeatures";
import Simple from "../components/Simple";

class About extends PureComponent {
  state = { click: 0 }

  static async getInitialProps({ req, res, usefulFeatures, args, ...restInInitialProps }) {
    const isServer = typeof window === 'undefined';
    console.log("About getInitialProps", {isServer}, {restInInitialProps});

    return {
      fromInitialProps: "This is About Page",
      usefulFeatures,
      args
    }
  }

  render() {
    const { fromInitialProps, ...restInRender } = this.props;

    console.log("About render", {restInRender});

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
