import React from 'react';
import {GoogleAnalytics, Segment, Stripe, Page} from './index';

export class App extends React.Component {
  
  static propTypes = {
    googleAnalyticsKey: React.PropTypes.string,
    segmentKey: React.PropTypes.string,
    stripeKey: React.PropTypes.string,
    enableRouteTracking: React.PropTypes.bool,
  }

  static defaultProps = {
    enableRouteTracking: true
  }

  render() {
    var googleAnalyticsKey = this.props.googleAnalyticsKey;
    var segmentKey = this.props.segmentKey;
    var stripeKey = this.props.stripeKey;

    return (
      <div className="blitz-app">
        { this.props.children }
        { googleAnalyticsKey ? <GoogleAnalytics account={googleAnalyticsKey}/> : null }
        { segmentKey ? <Segment writeKey={segmentKey}/> : null }
        { stripeKey ? <Stripe stripeKey={stripeKey}/> : null }
      </div>
    );
  }
}
