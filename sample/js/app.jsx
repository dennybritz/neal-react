import React from "react";
import SamplePage from "./sample-page.jsx";
import ReactDOM from "react-dom";
import { Router, IndexRoute, Route, Link, Redirect } from "react-router";
import {App } from "../../js/components/index";

class SampleApp extends React.Component {
  render() {
    return (
      <App googleAnalyticsKey="ABC" segmentKey="ABC" stripeKey="pk_test_6pRNASCoBOKtIshFeQd4XMUh">
        {this.props.children}
      </App>
    );
  }
}


ReactDOM.render((
  <Router>
    <Route path="/" component={SampleApp}>
      <IndexRoute name="home" component={SamplePage}/>
      <Route path="*" component={SamplePage}/>
    </Route>
  </Router>
), document.getElementById("main"));
