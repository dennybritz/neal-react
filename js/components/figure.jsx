import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";

export class Figure extends React.Component {

  static propTypes = {
    src: PropTypes.string.isRequired,
    caption: PropTypes.node.isRequired,
    className: PropTypes.string
  };

  render() {
    const figureClasses = classNames("neal-figure figure", this.props.className);
    return (
      <figure {... this.props} className={figureClasses}>
        <img src={this.props.src} alt={this.props.caption}/>
        <figcaption className="figure-caption">{this.props.caption}</figcaption>
      </figure>
    );
  }
}
