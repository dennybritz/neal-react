import React from "react";
import { GoogleAnalytics, Segment, Stripe, Page, TypeformIntegration } from "./index";

export class App extends React.Component {

  static propTypes = {
    googleAnalyticsKey: React.PropTypes.string,
    segmentKey: React.PropTypes.string,
    stripeKey: React.PropTypes.string,
    history: React.PropTypes.object
  }

  render() {
    let googleAnalyticsKey = this.props.googleAnalyticsKey;
    let segmentKey = this.props.segmentKey;
    let stripeKey = this.props.stripeKey;
    let history = this.props.history;

    return (
      <div className="neal-app">
        { this.props.children }
        { googleAnalyticsKey ? <GoogleAnalytics account={googleAnalyticsKey} history={history} /> : null }
        { segmentKey ? <Segment writeKey={segmentKey} history={history} /> : null }
        { stripeKey ? <Stripe stripeKey={stripeKey}/> : null }
      </div>
    );
  }
}
