import React from "react";

export class Segment extends React.Component {

  static propTypes ={
    writeKey: React.PropTypes.string.isRequired,
    history: React.PropTypes.object,
  };

  componentDidMount() {
    const writeKey = this.props.writeKey;
    const scriptProtocol = ("https:" === document.location.protocol ? "https://" : "http://");
    const scriptSrc = `${scriptProtocol}cdn.segment.com/analytics.js/v1/${writeKey}/analytics.min.js`;
    jQuery.getScript(scriptSrc, () => {
      // Track Route changes
      if (this.props.history) {
        this.props.history.listen((newLocation) => {
          analytics.page();
        });
      }
    });
  }

  render() {
    return <div key="segment"/>;
  }
}
