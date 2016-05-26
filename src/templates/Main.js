import React from 'react'
import Head from '../components/Head'

//Set up DevTools
if (typeof window !== 'undefined') {
    window.React = React;
}

export default class Main extends React.Component {
  render() {
    return (
      <html>
        <Head title='React and CSS Modules' />
        <body>
          {this.props.children}
        </body>
      </html>
    )
  }
}
