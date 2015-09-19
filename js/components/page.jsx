import React from 'react';

export default class Page extends React.Component {

  render() {
    return <div>{this.props.children}</div>;
  }
  
}