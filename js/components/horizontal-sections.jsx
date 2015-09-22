import React from 'react';

export class HorizontalSections extends React.Component {
  render() {
    var numSections = this.props.children.length;
    return (
      <div className="blitz-horizontal-sections">

      </div>
    );
  }
}

HorizontalSections.Section = class extends React.Component {
  render() {
    return(
      <div className="col"/>
    )
  }
}