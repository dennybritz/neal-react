import React from 'react';
import {Container, Row, Col} from '../helpers/bootstrap.jsx';
import Navbar from './navbar.jsx';

export default class Footer extends React.Component {

  static propTypes = {
    brandName: React.PropTypes.string.isRequired,
    facebookUrl: React.PropTypes.string,
    twitterUrl: React.PropTypes.string,
    emailUrl: React.PropTypes.string,
  }


  render() {
    return (
      <footer className="navbar">
        <Container>
          <Row>
            <Col size={["xs-12", "sm-4"]}>
            </Col>
            <Col size={["xs-12", "sm-4"]}>
            </Col>
            <Col size={["xs-12", "sm-4"]}>
              {this.renderSocialIcons()}
            </Col>
          </Row>
          <Row>
            <small>Copyright © {new Date().getFullYear()} {this.props.brandName} </small>
          </Row>
         
        </Container>
      </footer>
    );
  }

  renderSocialIcons() {
    return (
      <ul className="nav navbar-nav pull-right">
        { this.renderSocialIcon("fa-envelope-square", this.props.emailUrl) }
        { this.renderSocialIcon("fa-facebook", this.props.facebookUrl) }
        { this.renderSocialIcon("fa-twitter", this.props.twitterUrl) }
      </ul>
    )
  }

  

  renderSocialIcon(iconClass, url) {
    if(!url || !iconClass ) { return null; }
    return (
     <li className="nav-item">
        <a href={url} target="_blank">
          <span className="fa-stack">
            <i className="fa fa-circle fa-stack-2x "></i>
            <i className={`fa ${iconClass} fa-stack-1x fa-inverse`}></i>
          </span>
        </a>
      </li> 
    )
  }
}
