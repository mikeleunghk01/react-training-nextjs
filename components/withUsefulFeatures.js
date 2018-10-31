import React, { Component } from 'react';

const usefulFeatures = {
  a: "Apple",
  b: "Boy"
}

const withUsefulFeatures = args =>
  WrappedComponent =>
    class UsefulComponent extends Component {
      static displayName = `withUsefulFeatures(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

      static async getInitialProps(ctx) {
        console.log("HOC getInitialProps");

        const initialProps = WrappedComponent.getInitialProps
          ? await WrappedComponent.getInitialProps({
            ...ctx,
            usefulFeatures,
            args
          }) : {};


        return {
          initialProps
        };
      }

      render() {
        console.log('HOC render');
        return <WrappedComponent {...this.props.initialProps} {...WrappedComponent.props} />;
      }
    }


export default withUsefulFeatures;
