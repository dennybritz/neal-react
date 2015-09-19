import React from 'react';

export default class Section extends React.Component {

  static propTypes = {
    heading: React.PropTypes.string
  }

  render() {
    var classes = `container ${this.props.className}`
    return (
      <div {... this.props} className={classes}>
        { this.renderHeading() }  
        {this.props.children}
      </div>
    );
  }

  renderHeading() {
    if(!this.props.heading) return null;
    return <h2>{this.props.heading}</h2>
  }
}
