import React from "react";
import PropTypes from 'prop-types';
import { HorizontalSplit } from "./horizontal-split";
import { Row, Col } from "../helpers/bootstrap";

export class TeamMember extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="card neal-team-member">
        <img className="card-img-top neal-team-member-img img-responsive" src={this.props.imageUrl}/>
        <div className="card-block neal-team-member-profile">
          <h4 className="card-title lead neal-team-member-name">
            {this.props.name}
            {this.props.title ? `, ${this.props.title}` : null}
          </h4>
          <br/>
          <div className="neal-team-member-description">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export class Team extends React.Component {

  static propTypes = {
    // TODO: Enforce Member type
    children: PropTypes.arrayOf(PropTypes.element),
  };

  render() {
    return (
      <div className="card-deck-wrapper neal-team">
        <Row>
          <div className="card-deck">
            {this.props.children.map((member, idx) => {
              return (
                <Col size={["xs-12", "sm-6", "lg-4"]} key={idx}>{member}</Col>
              );
            })}
          </div>
        </Row>
      </div>
    );
  }

}
