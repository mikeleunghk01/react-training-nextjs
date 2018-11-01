import React from "react";
import App, { Container } from "next/app";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    console.log("MyApp getInitialProps");

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch", { error }, { info });
  }

  render() {
    const { Component, pageProps } = this.props;

    console.log("MyApp render", { pageProps });

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
