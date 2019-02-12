import React from "react";

export class Page extends React.Component {

  render() {
    return <div className={'page'}>{this.props.children}</div>;
  }

}
