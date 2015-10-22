import React from "react";

export class Typeform extends React.Component {
  componentDidMount() {
    jQuery.getScript("https://s3-eu-west-1.amazonaws.com/share.typeform.com/share.js");
  }

  render() {
    return this.props.children;
  }
}
