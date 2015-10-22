import React from "react";

export class GoogleAnalytics extends React.Component {

  static propTypes = {
    account: React.PropTypes.string.isRequired,
    history: React.PropTypes.object
  }

  componentDidMount() {
    window.ga = window.ga || function() { (ga.q = ga.q || []).push(arguments)  }; ga.l = +new Date;
    const account = this.props.account;
    const scriptProtocol = ("https:" === document.location.protocol ? "https://ssl" : "http://www");
    const scriptSrc = `${scriptProtocol}.google-analytics.com/ga.js`;
    jQuery.getScript(scriptSrc, () => {
      // Track Route changes
      ga("create", account, "auto");
      if(this.props.history) {
        this.props.history.listen((newLocation) => {
          ga("send", "pageview");
        });
      }
    });
  }

  render() {
    return <div key="google-analytics"/>;
  }
}
