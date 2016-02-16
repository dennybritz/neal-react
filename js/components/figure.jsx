import React from "react";
import classNames from "classnames";

export class Figure extends React.Component {

  static propTypes = {
    src: React.PropTypes.string.isRequired,
    caption: React.PropTypes.node.isRequired,
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
