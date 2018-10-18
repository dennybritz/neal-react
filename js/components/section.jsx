import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";

export class Section extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    heading: PropTypes.node,
  };

  render() {
    const _className = classNames("neal-section", this.props.className);
    return (
      <div {... this.props} className={_className}>
        <div className="container">
          { this.props.heading ? <h2>{this.props.heading}</h2> : null }
          {this.props.children}
        </div>
      </div>
    );
  }

}
