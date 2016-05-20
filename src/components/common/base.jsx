import React from 'react';

class Base extends React.Component {

  render() {
    return (
      <html lang={this.props.lang}>
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="description" content=""/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <title>{this.props.title}</title>
          <link rel="stylesheet" type="text/css" href="css/ltr.css"/>
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    );
  }
}

Base.propTypes = {
  lang: React.PropTypes.string,
  title: React.PropTypes.string,
  children: React.PropTypes.object
};

export default Base;
