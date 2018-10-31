import React, { PureComponent } from 'react';
import { withRouter } from "next/router";
import Simple from "../components/Simple";

class Index extends PureComponent {
  state = {}

  static async getInitialProps({ req, res, query = {}, ...rest }) {
    const { injectedValue } = query

    const isServer = typeof window === 'undefined';
    console.log({isServer}, "Index getInitialProps");

    if (injectedValue) {
      console.log({
        injectedValue
      })
    }

    return {
      fromInitialProps: "This is Index Page"
    }
  }

  render() {
    const { fromInitialProps, router } = this.props;

    return (
      <div>
        <div>
        {fromInitialProps}
        </div>
        <Simple />
        <button onClick={() => router.push("/about")}>Route to next page</button>
      </div>);
  }
}

export default withRouter(Index);
