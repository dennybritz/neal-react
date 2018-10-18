import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";

export class ImageList extends React.Component {

  static propTypes = {
    centered: PropTypes.bool.isRequired,
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
    src: PropTypes.string.isRequired,
    url: PropTypes.string,
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
