import React from 'react';

class Layout extends React.Component {
  render() {
    return (
      <div>
          {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.object
};

export default Layout;
