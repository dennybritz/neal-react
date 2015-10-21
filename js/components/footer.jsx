import React from "react";
import { Container, Row, Col } from "../helpers/bootstrap.jsx";
import Navbar from "./navbar.jsx";

export class Footer extends React.Component {

  static propTypes = {
    brandName: React.PropTypes.string.isRequired,
    facebookUrl: React.PropTypes.string,
    twitterUrl: React.PropTypes.string,
    emailUrl: React.PropTypes.string,
    address: React.PropTypes.node
  }

  render() {

    let childrenArray = React.Children.toArray(this.props.children);
    let address = childrenArray.find((c) => c.type.name === "FooterAddress");

    return (
      <footer className="blitz-footer navbar">
        <Container>
          <Row>
            <Col size={["xs-12", "md-4"]}>
              <p className="blitz-footer-copyright">
                Copyright © {new Date().getFullYear()}, {this.props.brandName}
              </p>
              {this.props.address}
            </Col>
            <Col size={["xs-12", "md-4"]}>
            </Col>
            <Col size={["xs-12", "md-4"]}>
              {this.renderSocialIcons()}
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }

  renderSocialIcons() {
    return (
      <ul className="nav navbar-nav blitz-footer-social pull-right">
        { this.renderSocialIcon("fa-envelope-square", this.props.emailUrl) }
        { this.renderSocialIcon("fa-twitter", this.props.twitterUrl) }
        { this.renderSocialIcon("fa-facebook", this.props.facebookUrl) }
      </ul>
    );
  }


  renderSocialIcon(iconClass, url) {
    if(!url || !iconClass ) { return null; }
    return (
     <li className={`nav-item blitz-footer-social-icon ${iconClass.replace("fa-","")}`}>
        <a href={url} target="_blank">
          <span className="fa-stack">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className={`fa ${iconClass} fa-stack-1x fa-inverse`}></i>
          </span>
        </a>
      </li>
    );
  }
}

export class FooterAddress extends React.Component {

  render() {
    return (
      <div className="blitz-footer-address">
        { this.props.children }
      </div>
    );
  }

}
