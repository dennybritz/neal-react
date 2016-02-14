import React from "react";
import classNames from "classnames";

export class ImageList extends React.Component {

  static propTypes = {
    centered: React.PropTypes.bool.isRequired,
  };

  static defaultProps = {
    centered: true,
  };

  render() {
    const _className = classNames("neal-image-list list-inline", { centered: this.props.centered });
    return (
      <ul className={_className}>
        {this.props.children}
      </ul>
    );
  }
}

export class ImageListItem extends React.Component {

  static propTypes = {
    src: React.PropTypes.string.isRequired,
    url: React.PropTypes.string,
  };

  render() {
    return (
      <li className="neal-image-list-item">
        <a href={this.props.url} target="_blank">
          <img src={this.props.src} />
        </a>
      </li>
    );
  }

}
