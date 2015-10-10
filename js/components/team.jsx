import React from 'react';
import {HorizontalSplit} from './horizontal-split.jsx';

class Member extends React.Component {

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    imageUrl: React.PropTypes.string.isRequired
  }

  render() {
    return(
      <div className="blitz-team-member">
        <img className="blitz-team-member-img img-responsive img-thumbnail" src={this.props.imageUrl}/>
        <div className="blitz-team-member-profile">
          <span className="blitz-team-member-name">{this.props.name}</span>,&nbsp;
          <span className="blitz-team-member-title">{this.props.title}</span>
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
      <div className="blitz-team">
        <HorizontalSplit>
          {this.props.children}
        </HorizontalSplit>
      </div>
    );
  }

}

Team.Member = Member;