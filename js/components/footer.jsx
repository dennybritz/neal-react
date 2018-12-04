import React from "react";
import PropTypes from 'prop-types';
import { Container } from "../helpers/bootstrap";

export class Footer extends React.Component {

  static propTypes = {
    brandName: PropTypes.node.isRequired,
    facebookUrl: PropTypes.string,
    twitterUrl: PropTypes.string,
    githubUrl: PropTypes.string,
    email: PropTypes.node,
    address: PropTypes.node,
  };

  render() {
    return (
      <footer className="neal-footer navbar">
        <Container>
          <div className={'flex-grow-1 d-flex align-items-center justify-content-between'}>
            <div>
              <div className="neal-footer-brand">
                © {this.props.brandName}
              </div>
              {this.props.address}
              <div>
                <a href={`mailto:${this.props.email}`}>{this.props.email}</a>
              </div>
            </div>
            {this.renderSocialIcons()}
          </div>
        </Container>
      </footer>
    );
  }

  renderSocialIcons() {
    return (
      <ul className="nav navbar-nav neal-footer-social pull-right d-flex flex-row">
        { this.renderSocialIcon("fa-twitter", this.props.twitterUrl) }
        { this.renderSocialIcon("fa-facebook", this.props.facebookUrl) }
        { this.renderSocialIcon("fa-github", this.props.githubUrl) }
      </ul>
    );
  }


  renderSocialIcon(iconClass, url) {
    if (!url || !iconClass) { return null; }
    return (
      <li className={`nav-item neal-footer-social-icon ${iconClass.replace("fa-", "")}`}>
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
