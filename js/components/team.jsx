import React from "react";
import { HorizontalSplit } from "./horizontal-split.jsx";
import { Row, Col } from "../helpers/bootstrap.jsx";

class Member extends React.Component {

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    imageUrl: React.PropTypes.string.isRequired
  }

  render() {
    return(
      <div className="card blitz-team-member">
        <img className="card-img-top blitz-team-member-img img-responsive" src={this.props.imageUrl}/>
        <div className="card-block blitz-team-member-profile">
          <h4 className="card-title lead blitz-team-member-name">
            {this.props.name}, {this.props.title}</h4>
          <br/>
          <div className="blitz-team-member-description">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export class Team extends React.Component {

  static propTypes = {
    // TODO: Enforce Member type
    children: React.PropTypes.arrayOf(React.PropTypes.element)
  }

  render() {
    return (
      <div className="card-deck-wrapper blitz-team">
        <Row>
          <div className="card-deck">
            {this.props.children.map((member) => {
              return(
                <Col size={["xs-12", "sm-6", "lg-4"]}>{member}</Col>
              );
            })}
          </div>
        </Row>
      </div>
    );
  }

}

Team.Member = Member;
