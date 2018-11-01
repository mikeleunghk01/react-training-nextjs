import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // const { err, req, res, pathname, query, asPath, renderPage } = ctx;
    console.log("MyDocument getInitialProps");
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    // const { pathname } = this.props;
    // console.log('document props', this.props);
    const pathname = 3;

    console.log("MyDocument render");
    return (
      <html>
        <title>React Training -- Next JS</title>
        <Head>
          <script>{`const pathName = ${pathname}`}</script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
