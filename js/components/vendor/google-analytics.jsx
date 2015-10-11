import React from "react";
import history from "../../helpers/history";

export class GoogleAnalytics extends React.Component {


  static propTypes = {
    account: React.PropTypes.string.isRequired,
    enableRouteTracking: React.PropTypes.bool
  }

  static defaultProps = {
    enableRouteTracking: true
  }

  componentDidMount() {
    // Initialize Google Analytics
    window.ga = window.ga || function() { (ga.q = ga.q || []).push(arguments) ; };ga.l = +new Date;
    ga("create", this.props.account, "auto");
    let src = ("https:" === document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
    jQuery.getScript(src);
    // Track route changes
    if(this.props.enableRouteTracking) {
      history.listen((newLocation) => {
        ga("send", "pageview");
      });
    }
  }

  render() {
    return <div key="google-analytics"/>;
  }
}
