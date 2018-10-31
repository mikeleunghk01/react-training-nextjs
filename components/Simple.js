import React, { PureComponent } from 'react';

class Simple extends PureComponent {
  state = {
    simple: 0
  }
  render() {
    const isServer = typeof window === 'undefined';
    console.log("Simple Component render", {isServer});

    return (
      <div>
        {`simple: ${this.state.simple}`}
      </div>
    );
  }
}

export default Simple;
