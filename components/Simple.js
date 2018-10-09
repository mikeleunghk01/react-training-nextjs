import React, { Component } from 'react';

class Simple extends Component {
  state = {
    simple: 0
  }
  render() {
    const isServer = typeof window === 'undefined';
    console.log({isServer}, "Simple Component");

    return (
      <div>
        {`simple: ${this.state.simple}`}
      </div>
    );
  }
}

export default Simple;
