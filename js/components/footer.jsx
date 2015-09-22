import React from 'react';
import {Container, Row, Col} from '../helpers/bootstrap.jsx';
import Navbar from './navbar.jsx';

export default class Footer extends React.Component {

  static propTypes = {
    brandName: React.PropTypes.string.isRequired,
    items: React.PropTypes.arrayOf(React.PropTypes.shape({
      text: React.PropTypes.string,
    })).isRequired
  }


  render() {
    return (
      <footer className="navbar">
        <Container>
          <Row>
            <Col size={["xs-12", "sm-6"]}>
              <a className="navbar-brand">Copyright {new Date().getFullYear()}, {this.props.brandName}</a>
            </Col>
            <Col size={["xs-12", "sm-6"]}>
              <ul className="nav navbar-nav pull-right">
                {this.props.items.map(function(item){
                  return <Navbar.NavItem key={item.text}>{item.text}</Navbar.NavItem>
                })}
              </ul>
            </Col>
            {this.renderSocialIcons()}
          </Row>
          
        </Container>
      </footer>
    );
  }

  renderSocialIcons() {
    return (
      <Col size={["xs-12"]}>
        <ul className="nav navbar-nav pull-right">
          <Navbar.NavItem><i className="fa fa-twitter"/></Navbar.NavItem>
          <Navbar.NavItem><i className="fa fa-facebook"/></Navbar.NavItem>
        </ul>
      </Col>
    )
  }
}
