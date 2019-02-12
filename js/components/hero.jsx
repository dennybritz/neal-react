import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
import { Container, Row, Col } from "../helpers/bootstrap";

export class Hero extends React.Component {

  static propTypes = {
    backgroundImage: PropTypes.string,
    className: PropTypes.string,
  };

  render() {
    const { backgroundImage, children, className, ...otherProps } = this.props;
    const _style = {};
    if (backgroundImage) {
      _style.backgroundImage = `url(${backgroundImage})`;
    }
    const _className = classNames("neal-hero jumbotron jumbotron-fluid", className);
    return (
      <div {...otherProps} className={_className} style={_style}>
        <Container>
          { children }
        </Container>
      </div>
    );
  }
}
