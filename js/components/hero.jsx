import React from "react";
import { Container, Row, Col } from "../helpers/bootstrap.jsx";
import classNames from "classnames";

export class Hero extends React.Component {

  static propTypes = {
    heading: React.PropTypes.string.isRequired,
    backgroundImage: React.PropTypes.string
  }

  render() {
    let _style = {};
    if (this.props.backgroundImage) {
      _style["backgroundImage"] = `url(${this.props.backgroundImage})`;
    }
    let _className = classNames("blitz-hero jumbotron jumbotron-fluid", this.props.className);
    return (
      <div {... this.props} className={_className} style={_style}>
        <Container>
          <h1 className="display-1">{this.props.heading}</h1>
          { this.props.children }
        </Container>
      </div>
    );
  }
}
