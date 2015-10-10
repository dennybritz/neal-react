import React from 'react';
import {Container, Row, Col} from '../helpers/bootstrap.jsx';

export class Hero extends React.Component {

  static propTypes = {
    heading: React.PropTypes.string.isRequired,
    subheading: React.PropTypes.string
  }

  render() {
    return (
      <div className="blitz-hero jumbotron jumbotron-fluid">
        <Container>
          <h1 className="display-1">{this.props.heading}</h1>
          <p className="lead">{this.props.subheading}</p>
        </Container>
      </div>
    );
  }
}
