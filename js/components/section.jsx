import React from 'react';
import classNames from 'classnames';

export class Section extends React.Component {

  static propTypes = {
    heading: React.PropTypes.string
  }

  render() {
    var _className = classNames('container', 'blitz-section', this.props.className)
    return (
      <div {... this.props} className={_className}>
        { this.props.heading ?  <h2>{this.props.heading}</h2> : null }  
        {this.props.children}
      </div>
    );
  }

}