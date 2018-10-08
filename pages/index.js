import React, { Component } from 'react';
import { withRouter } from "next/router";
import Simple from "../components/Simple";

class Index extends Component {
  state = {}

  static async getInitialProps({ req, res, query = {}, ...rest }) {
    const { injectedValue } = query

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
