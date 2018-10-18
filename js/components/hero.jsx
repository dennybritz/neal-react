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
    const _style = {};
    if (this.props.backgroundImage) {
      _style.backgroundImage = `url(${this.props.backgroundImage})`;
    }
    const _className = classNames("neal-hero jumbotron jumbotron-fluid", this.props.className);
    return (
      <div className={_className} style={_style}>
        <Container>
          { this.props.children }
        </Container>
      </div>
    );
  }
}
