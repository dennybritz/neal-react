import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";

export class Section extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    heading: PropTypes.node,
  };

  render() {
    const { children, className, heading, ...otherProps } = this.props;
    const _className = classNames("neal-section", className);

    return (
      <div {...otherProps} className={_className}>
        <div className="container">
          {heading ? <h2>{heading}</h2> : null}
          {children}
        </div>
      </div>
    );
  }

}
