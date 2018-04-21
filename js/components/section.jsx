import React from "react";
import classNames from "classnames";

export class Section extends React.Component {

  static propTypes = {
    heading: React.PropTypes.node,
  };

  render() {
    const _className = classNames("neal-section", this.props.className);
    const { heading, ...otherProps } = this.props;
    return (
      <div {... otherProps} className={_className}>
        <div className="container">
          { heading ? <h2>{heading}</h2> : null }
          {this.props.children}
        </div>
      </div>
    );
  }

}
