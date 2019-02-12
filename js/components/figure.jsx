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
    const { caption, className, src, ...otherProps } = this.props;
    const figureClasses = classNames("neal-figure figure", className);

    return (
      <figure {...otherProps} className={figureClasses}>
        <img src={src} alt={caption}/>
        <figcaption className="figure-caption">{caption}</figcaption>
      </figure>
    );
  }
}
