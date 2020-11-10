import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss'

import React, { Component } from 'react'

export default class App extends Component {

  static async getInitialProps({ Component, context }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(context)
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />

  }
}
